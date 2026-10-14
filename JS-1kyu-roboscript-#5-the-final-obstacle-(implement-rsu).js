class RSUProgram {
  constructor(source) {
    this.source = source;
  }

  // ---------- Tokenizer ----------
  getTokens() {
    const s = this.source;
    const n = s.length;
    const tokens = [];
    let i = 0;

    const readDigits = (from) => {
      let j = from;
      while (j < n && s[j] >= '0' && s[j] <= '9') j++;
      return s.slice(from, j);
    };

    while (i < n) {
      const c = s[i];

      if (/\s/.test(c)) { i++; continue; }

      if (c === '/') {
        if (s[i + 1] === '/') {
          const e = s.indexOf('\n', i + 2);
          i = e === -1 ? n : e + 1;
          continue;
        }
        if (s[i + 1] === '*') {
          const e = s.indexOf('*/', i + 2);
          if (e === -1) throw new Error('Unterminated multiline comment');
          i = e + 2;
          continue;
        }
        throw new Error(`Invalid token '/' at ${i}`);
      }

      if (c === 'F' || c === 'L' || c === 'R' || c === ')') {
        const d = readDigits(i + 1);
        if (d.length > 1 && d[0] === '0') throw new Error(`Leading zeroes at ${i}`);
        tokens.push(c + d);
        i += 1 + d.length;
        continue;
      }

      if (c === 'p' || c === 'P') {
        const d = readDigits(i + 1);
        if (d.length === 0) throw new Error(`Missing identifier at ${i}`);
        if (d.length > 1 && d[0] === '0') throw new Error(`Leading zeroes at ${i}`);
        tokens.push(c + d);
        i += 1 + d.length;
        continue;
      }

      if (c === '(' || c === 'q') {
        tokens.push(c);
        i++;
        continue;
      }

      throw new Error(`Invalid token '${c}' at ${i}`);
    }
    return tokens;
  }

  // ---------- Compiler ----------
  _parse(tokens) {
    let pos = 0;

    const parseSeq = (term, inGroup, parent) => {
      const scope = { defs: new Map(), items: [], parent, cache: null, closeNum: null };
      while (true) {
        if (pos >= tokens.length) {
          if (term !== null) throw new Error('Unmatched opening bracket or pattern definition');
          return scope;
        }
        const tok = tokens[pos++];
        const ch = tok[0];
        const rest = tok.slice(1);

        switch (ch) {
          case 'F':
          case 'L':
          case 'R':
            scope.items.push({ type: 'cmd', c: ch, n: rest === '' ? 1 : Number(rest) });
            break;
          case '(': {
            const g = parseSeq(')', true, scope);
            scope.items.push({ type: 'group', items: g.items, n: g.closeNum === null ? 1 : g.closeNum });
            break;
          }
          case ')':
            if (term !== ')') throw new Error('Unmatched closing bracket');
            scope.closeNum = rest === '' ? null : Number(rest);
            return scope;
          case 'p': {
            if (inGroup) throw new Error('Pattern definition inside bracketed sequence');
            if (scope.defs.has(rest)) throw new Error(`Pattern p${rest} redefined in same scope`);
            const pat = parseSeq('q', false, scope);
            scope.defs.set(rest, pat);
            break;
          }
          case 'q':
            if (term !== 'q') throw new Error('Unmatched end of pattern definition');
            return scope;
          case 'P':
            scope.items.push({ type: 'call', id: rest });
            break;
          default:
            throw new Error(`Unexpected token ${tok}`);
        }
      }
    };

    return parseSeq(null, false, null);
  }

  convertToRaw(tokens) {
    const root = this._parse(tokens);
    const active = new Set();

    const expand = (items, scope, out) => {
      for (const it of items) {
        if (it.type === 'cmd') {
          for (let k = 0; k < it.n; k++) out.push(it.c);
        } else if (it.type === 'group') {
          if (it.n === 0) continue; // never executed: errors inside are ignored
          const body = [];
          expand(it.items, scope, body);
          for (let k = 0; k < it.n; k++) for (let j = 0; j < body.length; j++) out.push(body[j]);
        } else {
          let found = null;
          for (let s = scope; s; s = s.parent) {
            if (s.defs.has(it.id)) { found = s.defs.get(it.id); break; }
          }
          if (!found) throw new Error(`Pattern P${it.id} does not exist`);
          if (active.has(found)) throw new Error(`Infinite recursion in P${it.id}`);
          if (!found.cache) {
            active.add(found);
            const body = [];
            expand(found.items, found, body);
            active.delete(found);
            found.cache = body;
          }
          const body = found.cache;
          for (let j = 0; j < body.length; j++) out.push(body[j]);
        }
      }
    };

    const out = [];
    expand(root.items, root, out);
    return out;
  }

  // ---------- Machine instruction executor ----------
  executeRaw(commands) {
    const dx = [1, 0, -1, 0];
    const dy = [0, 1, 0, -1]; // y grows upwards; flipped when rendering
    let x = 0, y = 0, d = 0;
    const visited = new Set(['0,0']);
    let minX = 0, maxX = 0, minY = 0, maxY = 0;

    for (const c of commands) {
      if (c === 'F') {
        x += dx[d];
        y += dy[d];
        visited.add(x + ',' + y);
        if (x < minX) minX = x; if (x > maxX) maxX = x;
        if (y < minY) minY = y; if (y > maxY) maxY = y;
      } else if (c === 'L') d = (d + 1) % 4;
      else if (c === 'R') d = (d + 3) % 4;
    }

    const rows = [];
    for (let r = maxY; r >= minY; r--) {
      let line = '';
      for (let col = minX; col <= maxX; col++) line += visited.has(col + ',' + r) ? '*' : ' ';
      rows.push(line);
    }
    return rows.join('\r\n');
  }

  // ---------- One-step execution ----------
  execute() {
    return this.executeRaw(this.convertToRaw(this.getTokens()));
  }
}

module.exports = { RSUProgram };
