'use strict';
// myslang -> myslang where every function application is a tail call.
// Technique: CPS conversion + defunctionalisation (continuations are first-order
// data: a list of frames {tag, [saved variables]}), so no higher-order functions.

const KEYWORDS = new Set(['if', 'then', 'else', 'fun', 'out', 'true', 'false',
  'fst', 'snd', 'hd', 'tl', 'and', 'or']);
const UNARY = new Set(['fst', 'snd', 'hd', 'tl']);
const LEVELS = [['*', '/'], ['+', '-'], ['<', '>'], ['=', '!='], ['and'], ['or'], ['::']];
const PREC = {};
LEVELS.forEach((ops, i) => ops.forEach(o => (PREC[o] = 7 - i)));

const fail = msg => { throw new Error('Syntax error: ' + msg); };

// ---------------------------------------------------------------- tokenizer
function tokenize(src) {
  const re = /[ \t\r\n]+|#[^\n]*\n|\w+|!=|::|[(){}\[\],=+\-*\/<>!]/y;
  const toks = [];
  let i = 0;
  while (i < src.length) {
    re.lastIndex = i;
    const m = re.exec(src);
    if (!m) fail(`unexpected character ${JSON.stringify(src[i])} at ${i}`);
    const s = m[0];
    i += s.length;
    if (/^[ \t\r\n]/.test(s)) continue;
    if (s[0] === '#') toks.push({ type: 'comment', v: s });
    else if (/^\w/.test(s)) {
      if (/^\d+$/.test(s)) toks.push({ type: 'int', v: s });
      else if (/^[A-Za-z_]\w*$/.test(s)) toks.push({ type: KEYWORDS.has(s) ? 'kw' : 'id', v: s });
      else fail(`invalid token ${s}`); // e.g. 12abc: missing whitespace
    } else toks.push({ type: 'sym', v: s });
  }
  return toks;
}

// ------------------------------------------------------------------- parser
class Parser {
  constructor(toks) { this.t = toks; this.i = 0; }
  peek() { return this.t[this.i]; }
  next() { return this.t[this.i++]; }
  is(v) { const k = this.peek(); return !!k && (k.type === 'kw' || k.type === 'sym') && k.v === v; }
  expect(v) { if (!this.is(v)) fail(`expected '${v}'`); this.i++; }
  ident() { const k = this.next(); if (!k || k.type !== 'id') fail('expected identifier'); return k.v; }

  program() {
    const funs = [];
    for (;;) {
      const k = this.peek();
      if (k && k.type === 'comment') this.i++;
      else if (this.is('fun')) funs.push(this.fun());
      else break;
    }
    this.expect('out');
    const out = this.ident();
    if (this.i < this.t.length) fail('unexpected tokens after program');
    return { funs, out };
  }
  fun() {
    this.expect('fun');
    const name = this.ident();
    this.expect('(');
    const params = [];
    if (!this.is(')')) {
      params.push(this.ident());
      while (this.is(',')) { this.i++; params.push(this.ident()); }
    }
    this.expect(')');
    this.expect('=');
    return { name, params, body: this.expr() };
  }
  // LEVELS[0] binds tightest, LEVELS[last] loosest, so parse from the loosest level down.
  expr() { return this.level(LEVELS.length - 1); }
  level(i) {
    if (i < 0) return this.operand();
    let left = this.level(i - 1);
    for (;;) {
      const k = this.peek();
      if (!k || !(k.type === 'kw' || k.type === 'sym') || !LEVELS[i].includes(k.v)) return left;
      this.i++;
      const right = k.v === '::' ? this.level(i) : this.level(i - 1);
      left = { t: 'bin', op: k.v, l: left, r: right };
      if (k.v === '::') return left;
    }
  }
  operand() {
    const k = this.peek();
    if (!k) fail('unexpected end of input');
    if ((k.type === 'kw' && UNARY.has(k.v)) || (k.type === 'sym' && k.v === '!')) {
      this.i++;
      return { t: 'un', op: k.v, e: this.operand() };
    }
    if (this.is('if')) {
      this.i++;
      const c = this.expr(); this.expect('then');
      const a = this.expr(); this.expect('else');
      return { t: 'if', c, a, b: this.expr() };
    }
    if (k.type === 'int') { this.i++; return { t: 'int', v: k.v }; }
    if (this.is('true') || this.is('false')) { this.i++; return { t: 'bool', v: k.v === 'true' }; }
    if (k.type === 'id') {
      this.i++;
      if (!this.is('(')) return { t: 'var', name: k.v };
      this.i++;
      const args = [];
      if (!this.is(')')) {
        args.push(this.expr());
        while (this.is(',')) { this.i++; args.push(this.expr()); }
      }
      this.expect(')');
      return { t: 'app', name: k.v, args };
    }
    if (this.is('{')) {
      this.i++;
      const a = this.expr(); this.expect(','); const b = this.expr(); this.expect('}');
      return { t: 'pair', a, b };
    }
    if (this.is('[')) {
      this.i++;
      const items = [];
      if (!this.is(']')) {
        items.push(this.expr());
        while (this.is(',')) { this.i++; items.push(this.expr()); }
      }
      this.expect(']');
      return { t: 'list', items };
    }
    if (this.is('(')) { this.i++; const e = this.expr(); this.expect(')'); return e; }
    fail(`unexpected token '${k.v}'`);
  }
}

function children(e) {
  switch (e.t) {
    case 'pair': return [e.a, e.b];
    case 'list': return e.items;
    case 'if': return [e.c, e.a, e.b];
    case 'un': return [e.e];
    case 'bin': return [e.l, e.r];
    case 'app': return e.args;
    default: return [];
  }
}

function parse(src) {
  const prog = new Parser(tokenize(src)).program();
  const funs = new Map();
  for (const f of prog.funs) {
    if (funs.has(f.name)) fail(`duplicate function ${f.name}`);
    funs.set(f.name, f);
    if (new Set(f.params).size !== f.params.length) fail(`duplicate parameter in ${f.name}`);
  }
  if (!funs.has(prog.out)) fail(`output ${prog.out} is not a function`);
  for (const f of prog.funs) {
    const ps = new Set(f.params);
    const check = e => {
      if (e.t === 'var' && !ps.has(e.name)) fail(`unbound identifier ${e.name}`);
      if (e.t === 'app') {
        if (ps.has(e.name)) throw new Error(`The parameter identifier '${e.name}' overrides the global function '${e.name}'`);
        const g = funs.get(e.name);
        if (!g) fail(`unknown function ${e.name}`);
        if (g.params.length !== e.args.length) fail(`wrong number of arguments to ${e.name}`);
      }
      children(e).forEach(check);
    };
    check(f.body);
  }
  return prog;
}

// ------------------------------------------------------------------ printer
function show(e, ctx = 0) {
  switch (e.t) {
    case 'int': return e.v;
    case 'bool': return e.v ? 'true' : 'false';
    case 'var': return e.name;
    case 'pair': return `{${show(e.a)}, ${show(e.b)}}`;
    case 'list': return `[${e.items.map(x => show(x)).join(', ')}]`;
    case 'app': return `${e.name}(${e.args.map(x => show(x)).join(', ')})`;
    case 'un': return e.op + (e.op === '!' ? '' : ' ') + show(e.e, 100);
    case 'bin': {
      const p = PREC[e.op], r = e.op === '::';
      const s = `${show(e.l, r ? p + 1 : p)} ${e.op} ${show(e.r, r ? p : p + 1)}`;
      return p < ctx ? `(${s})` : s;
    }
    case 'if': {
      const s = `if ${show(e.c)} then ${show(e.a)} else ${show(e.b)}`;
      return ctx > 0 ? `(${s})` : s;
    }
  }
}

// ---------------------------------------------------------------- transform
const V = name => ({ t: 'var', name });
const APP = (name, args) => ({ t: 'app', name, args });
const INT = v => ({ t: 'int', v: String(v) });
const UN = (op, e) => ({ t: 'un', op, e });

function transform(src) {
  const prog = parse(src); // throws on invalid programs

  // every identifier already in the program, so generated names never clash
  const used = new Set();
  for (const f of prog.funs) { used.add(f.name); f.params.forEach(p => used.add(p)); }
  const fresh = base => {
    let n = 0, s;
    do { s = n ? `${base}_${n}` : base; n++; } while (used.has(s));
    used.add(s);
    return s;
  };

  // A parameter must never share a name with a function: rename any that do.
  const funNames = new Set(prog.funs.map(f => f.name));
  const mapKids = (e, fn) => {
    switch (e.t) {
      case 'pair': return { ...e, a: fn(e.a), b: fn(e.b) };
      case 'list': return { ...e, items: e.items.map(fn) };
      case 'if': return { ...e, c: fn(e.c), a: fn(e.a), b: fn(e.b) };
      case 'un': return { ...e, e: fn(e.e) };
      case 'bin': return { ...e, l: fn(e.l), r: fn(e.r) };
      case 'app': return { ...e, args: e.args.map(fn) };
      default: return e;
    }
  };
  const funs = prog.funs.map(f => {
    const ren = new Map();
    for (const p of f.params) if (funNames.has(p)) ren.set(p, fresh('p'));
    if (ren.size === 0) return f;
    const sub = e => (e.t === 'var' ? V(ren.get(e.name) || e.name) : mapKids(e, sub));
    return { name: f.name, params: f.params.map(p => ren.get(p) || p), body: sub(f.body) };
  });

  const callMemo = new WeakMap();
  const hasCall = e => {
    let r = callMemo.get(e);
    if (r === undefined) { r = e.t === 'app' || children(e).some(hasCall); callMemo.set(e, r); }
    return r;
  };
  const freeVars = (e, acc = new Set()) => {
    if (e.t === 'var') acc.add(e.name);
    children(e).forEach(c => freeVars(c, acc));
    return acc;
  };
  // first call-containing "unit" in evaluation order: an app with pure args, or an if
  const findTarget = n => {
    switch (n.t) {
      case 'app': { const a = n.args.find(hasCall); return a ? findTarget(a) : n; }
      case 'if': return n;
      case 'un': return findTarget(n.e);
      case 'bin': return findTarget(hasCall(n.l) ? n.l : n.r);
      case 'pair': return findTarget(hasCall(n.a) ? n.a : n.b);
      case 'list': return findTarget(n.items.find(hasCall));
    }
  };
  const replace = (n, target, rep) => {
    if (n === target) return rep;
    if (!hasCall(n)) return n;
    switch (n.t) {
      case 'app': return { ...n, args: n.args.map(a => replace(a, target, rep)) };
      case 'un': return { ...n, e: replace(n.e, target, rep) };
      case 'bin': return { ...n, l: replace(n.l, target, rep), r: replace(n.r, target, rep) };
      case 'pair': return { ...n, a: replace(n.a, target, rep), b: replace(n.b, target, rep) };
      case 'list': return { ...n, items: n.items.map(a => replace(a, target, rep)) };
      case 'if': return { ...n, c: replace(n.c, target, rep), a: replace(n.a, target, rep), b: replace(n.b, target, rep) };
    }
    return n;
  };

  const K = fresh('k');          // continuation-stack parameter
  const APPLY = fresh('apply');
  const DISPATCH = fresh('dispatch');
  const cpsName = new Map(funs.map(f => [f.name, fresh(f.name + '_k')]));
  const conts = []; // {name, saved, tmp, body, tag}

  // Tail-position expression computing e and passing the result to stack k.
  function gen(e, vars, k) {
    if (!hasCall(e)) return APP(APPLY, [k, e]);
    if (e.t === 'app' && !e.args.some(hasCall)) return APP(cpsName.get(e.name), [...e.args, k]);
    if (e.t === 'if' && !hasCall(e.c)) {
      return { t: 'if', c: e.c, a: gen(e.a, vars, k), b: gen(e.b, vars, k) };
    }
    const root = e.t === 'if' ? e.c : e;
    const target = findTarget(root);
    const tmp = fresh('t');
    const newRoot = replace(root, target, V(tmp));
    const rest = e.t === 'if' ? { t: 'if', c: newRoot, a: e.a, b: e.b } : newRoot;
    const live = freeVars(rest);
    const saved = vars.filter(v => live.has(v));
    const cont = { name: fresh('cont'), saved, tmp, tag: conts.length, body: null };
    conts.push(cont);
    cont.body = gen(rest, [...saved, tmp], V(K));
    const frame = { t: 'bin', op: '::', l: { t: 'pair', a: INT(cont.tag), b: { t: 'list', items: saved.map(V) } }, r: k };
    return target.t === 'app'
      ? APP(cpsName.get(target.name), [...target.args, frame])
      : gen(target, vars, frame);
  }

  const defs = [];
  const fn = (name, params, body) => defs.push(`fun ${name} (${params.join(', ')}) =\n    ${show(body)}\n`);

  const outFun = funs.find(f => f.name === prog.out);
  fn(outFun.name, outFun.params, APP(cpsName.get(outFun.name), [...outFun.params.map(V), { t: 'list', items: [] }]));
  for (const f of funs) fn(cpsName.get(f.name), [...f.params, K], gen(f.body, f.params, V(K)));
  for (const c of conts) fn(c.name, [...c.saved, c.tmp, K], c.body);

  const v = fresh('v');
  if (conts.length === 0) {
    fn(APPLY, [K, v], V(v));
  } else {
    const tag = fresh('tag'), s = fresh('s'), val = fresh('v'), rest = fresh('rest');
    const unpack = i => { let n = V(s); for (let j = 0; j < i; j++) n = UN('tl', n); return UN('hd', n); };
    const call = c => APP(c.name, [...c.saved.map((_, i) => unpack(i)), V(val), V(rest)]);
    let body = call(conts[conts.length - 1]);
    for (let i = conts.length - 2; i >= 0; i--) {
      body = { t: 'if', c: { t: 'bin', op: '=', l: V(tag), r: INT(conts[i].tag) }, a: call(conts[i]), b: body };
    }
    fn(DISPATCH, [tag, s, val, rest], body);
    const top = UN('hd', V(K));
    fn(APPLY, [K, v], {
      t: 'if', c: { t: 'bin', op: '=', l: V(K), r: { t: 'list', items: [] } }, a: V(v),
      b: APP(DISPATCH, [UN('fst', top), UN('snd', top), V(v), UN('tl', V(K))]),
    });
  }
  return defs.join('\n') + `\nout ${prog.out}\n`;
}

function convert(code) {
  console.log('--- INPUT ---\n' + code);
  try {
    const result = transform(code); // throws Error('Syntax error: ...') on invalid input
    console.log('--- OUTPUT ---\n' + result);
    return result;
  } catch (e) {
    console.log('--- THREW --- ' + e.message);
    throw e;
  }
}

if (typeof module !== 'undefined') module.exports = { convert };
