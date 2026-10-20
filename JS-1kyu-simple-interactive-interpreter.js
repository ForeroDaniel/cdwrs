class Interpreter {
  constructor() {
    this.vars = new Map();
    this.fns = new Map(); // name -> { params, body }
  }

  tokenize(src) {
    const re = /\s*(=>|[-+*\/%()=]|[A-Za-z_]\w*|\d*\.\d+|\d+\.?)/y;
    const tokens = [];
    let pos = 0;
    while (pos < src.length) {
      if (/^\s*$/.test(src.slice(pos))) break;
      re.lastIndex = pos;
      const m = re.exec(src);
      if (!m) throw new Error(`ERROR: Unexpected character at position ${pos}.`);
      pos = re.lastIndex;
      tokens.push(m[1]);
    }
    return tokens;
  }

  input(src) {
    const tokens = this.tokenize(src);
    if (tokens.length === 0) return '';
    if (tokens[0] === 'fn') return this.defineFunction(tokens);

    const p = this.makeParser(tokens, null);
    const ast = p.parseExpression(0);
    if (p.pos < tokens.length) throw new Error(`ERROR: Unexpected token '${tokens[p.pos]}'.`);
    return this.evaluate(ast, this.vars);
  }

  defineFunction(tokens) {
    const isId = t => /^[A-Za-z_]\w*$/.test(t) && t !== 'fn';
    const name = tokens[1];
    if (name === undefined || !isId(name)) throw new Error('ERROR: Invalid function name.');
    if (this.vars.has(name)) throw new Error(`ERROR: '${name}' is already a variable.`);

    let i = 2;
    const params = [];
    while (i < tokens.length && tokens[i] !== '=>') {
      if (!isId(tokens[i])) throw new Error(`ERROR: Invalid parameter '${tokens[i]}'.`);
      if (params.includes(tokens[i])) throw new Error(`ERROR: Duplicate parameter '${tokens[i]}'.`);
      params.push(tokens[i++]);
    }
    if (i >= tokens.length) throw new Error("ERROR: Missing '=>' in function definition.");

    const body = tokens.slice(i + 1);
    if (body.length === 0) throw new Error('ERROR: Missing function body.');
    const p = this.makeParser(body, new Set(params));
    const ast = p.parseExpression(0);
    if (p.pos < body.length) throw new Error(`ERROR: Unexpected token '${body[p.pos]}'.`);

    this.fns.set(name, { params, body: ast });
    return '';
  }

  makeParser(tokens, scope) {
    const self = this;
    const PREC = { '+': 1, '-': 1, '*': 2, '/': 2, '%': 2 };
    const isNum = t => /^(\d*\.\d+|\d+\.?)$/.test(t);
    const isId = t => /^[A-Za-z_]\w*$/.test(t);

    const parser = {
      pos: 0,
      parseExpression(minPrec) {
        let left = parser.parseFactor();
        while (parser.pos < tokens.length) {
          const op = tokens[parser.pos];
          const prec = PREC[op];
          if (prec === undefined || prec < minPrec) break;
          parser.pos++;
          const right = parser.parseExpression(prec + 1);
          left = { t: 'bin', op, l: left, r: right };
        }
        return left;
      },
      parseFactor() {
        if (parser.pos >= tokens.length) throw new Error('ERROR: Unexpected end of input.');
        const tok = tokens[parser.pos++];

        if (isNum(tok)) return { t: 'num', v: parseFloat(tok) };

        if (tok === '(') {
          const e = parser.parseExpression(0);
          if (tokens[parser.pos] !== ')') throw new Error("ERROR: Expected ')'.");
          parser.pos++;
          return e;
        }

        if (isId(tok)) {
          const nextIsAssign = tokens[parser.pos] === '=';

          if (scope && scope.has(tok)) {
            if (nextIsAssign) {
              parser.pos++;
              return { t: 'asg', name: tok, e: parser.parseExpression(0) };
            }
            return { t: 'var', name: tok };
          }

          if (self.fns.has(tok)) {
            if (nextIsAssign) throw new Error(`ERROR: '${tok}' is already a function.`);
            const fn = self.fns.get(tok);
            const args = [];
            for (let k = 0; k < fn.params.length; k++) args.push(parser.parseExpression(0));
            return { t: 'call', name: tok, args };
          }

          if (scope) throw new Error(`ERROR: Invalid identifier '${tok}' in function body.`);

          if (nextIsAssign) {
            parser.pos++;
            return { t: 'asg', name: tok, e: parser.parseExpression(0) };
          }
          return { t: 'var', name: tok };
        }

        throw new Error(`ERROR: Unexpected token '${tok}'.`);
      },
    };
    return parser;
  }

  evaluate(node, env) {
    switch (node.t) {
      case 'num':
        return node.v;
      case 'var':
        if (!env.has(node.name))
          throw new Error(`ERROR: Invalid identifier. No variable with name '${node.name}' was found.`);
        return env.get(node.name);
      case 'asg': {
        const v = this.evaluate(node.e, env);
        if (env === this.vars && this.fns.has(node.name))
          throw new Error(`ERROR: '${node.name}' is already a function.`);
        env.set(node.name, v);
        return v;
      }
      case 'bin': {
        const a = this.evaluate(node.l, env);
        const b = this.evaluate(node.r, env);
        switch (node.op) {
          case '+': return a + b;
          case '-': return a - b;
          case '*': return a * b;
          case '/': return a / b;
          case '%': return a % b;
        }
        break;
      }
      case 'call': {
        const fn = this.fns.get(node.name);
        const local = new Map();
        fn.params.forEach((p, i) => local.set(p, this.evaluate(node.args[i], env)));
        return this.evaluate(fn.body, local);
      }
    }
    throw new Error('ERROR: Invalid expression.');
  }
}
