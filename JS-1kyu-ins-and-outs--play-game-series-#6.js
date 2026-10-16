function insAndOuts(gamemap) {
  const lines = gamemap.split('\n');
  const H = lines.length;
  const W = Math.max(...lines.map(l => l.length));
  const R = (H - 1) >> 1, C = (W - 1) >> 1, N = R * C;
  if (R <= 0 || C <= 0) return '';

  // 0 = E (blank), 1 = I, 2 = O
  const type = new Array(N);
  for (let r = 0; r < R; r++)
    for (let c = 0; c < C; c++) {
      const ch = (lines[2 * r + 1] || '')[2 * c + 1];
      type[r * C + c] = ch === 'I' ? 1 : ch === 'O' ? 2 : 0;
    }

  const nb = [];
  for (let i = 0; i < N; i++) {
    const r = (i / C) | 0, c = i % C, a = [];
    if (r > 0) a.push(i - C);
    if (r < R - 1) a.push(i + C);
    if (c > 0) a.push(i - 1);
    if (c < C - 1) a.push(i + 1);
    nb.push(a);
  }
  const onBorder = i => {
    const r = (i / C) | 0, c = i % C;
    return r === 0 || c === 0 || r === R - 1 || c === C - 1;
  };

  // Draw the boundary of the inside set S with '.'
  function render(S) {
    const g = lines.map(l => l.padEnd(W).split(''));
    const inS = (r, c) => r >= 0 && c >= 0 && r < R && c < C && S[r * C + c];
    for (let r = 0; r < R; r++)
      for (let c = 0; c < C; c++) {
        if (!S[r * C + c]) continue;
        const y = 2 * r, x = 2 * c;
        if (!inS(r - 1, c)) for (let k = 0; k < 3; k++) g[y][x + k] = '.';
        if (!inS(r + 1, c)) for (let k = 0; k < 3; k++) g[y + 2][x + k] = '.';
        if (!inS(r, c - 1)) for (let k = 0; k < 3; k++) g[y + k][x] = '.';
        if (!inS(r, c + 1)) for (let k = 0; k < 3; k++) g[y + k][x + 2] = '.';
      }
    return g.map(row => row.join('')).join('\n');
  }

  // S only ever grows, so each defect forces a specific kind of move
  function analyze(S) {
    // 1. holes: must be filled completely (dead if one holds an O)
    const reached = new Uint8Array(N), stack = [];
    for (let i = 0; i < N; i++)
      if (!S[i] && onBorder(i)) { reached[i] = 1; stack.push(i); }
    while (stack.length) {
      const i = stack.pop();
      for (const j of nb[i]) if (!S[j] && !reached[j]) { reached[j] = 1; stack.push(j); }
    }
    const hole = [];
    for (let i = 0; i < N; i++)
      if (!S[i] && !reached[i]) {
        if (type[i] === 2) return { dead: true };
        hole.push(i);
      }
    if (hole.length) return { fill: hole };

    // 2. pinches (2x2 checkerboard = loop touching itself): add one outside cell
    let best = null;
    for (let r = 0; r < R - 1; r++)
      for (let c = 0; c < C - 1; c++) {
        const a = r * C + c, b = a + 1, d = a + C, e = a + C + 1;
        if (S[a] === S[e] && S[b] === S[d] && S[a] !== S[b]) {
          const outs = S[a] ? [b, d] : [a, e];
          const cand = outs.filter(i => type[i] === 0);
          if (!cand.length) return { dead: true };
          if (!best || cand.length < best.length) best = cand;
        }
      }
    if (best) return { branch: best };

    // 3. connectivity: some component must grow by an adjacent E
    const comp = new Int32Array(N).fill(-1);
    let nc = 0;
    for (let s = 0; s < N; s++) {
      if (!S[s] || comp[s] >= 0) continue;
      comp[s] = nc; stack.push(s);
      while (stack.length) {
        const i = stack.pop();
        for (const j of nb[i]) if (S[j] && comp[j] < 0) { comp[j] = nc; stack.push(j); }
      }
      nc++;
    }
    if (nc <= 1) return { valid: true };
    const adj = Array.from({ length: nc }, () => new Set());
    for (let i = 0; i < N; i++)
      if (S[i]) for (const j of nb[i]) if (!S[j] && type[j] === 0) adj[comp[i]].add(j);
    let pick = null;
    for (const s of adj) {
      if (!s.size) return { dead: true };
      if (!pick || s.size < pick.size) pick = s;
    }
    return { branch: [...pick] };
  }

  const start = new Uint8Array(N);
  let ins = 0;
  for (let i = 0; i < N; i++) if (type[i] === 1) { start[i] = 1; ins++; }

  // No 'in' at all: smallest loop around a single blank block
  if (!ins) {
    const e = type.indexOf(0);
    if (e < 0) return '';
    start[e] = 1;
    return render(start);
  }

  // Uniform-cost search; cost = number of E blocks inside the loop
  const buckets = [[start]];
  const seen = new Set([start.join('')]);
  for (let cost = 0; cost < buckets.length; cost++) {
    const b = buckets[cost];
    if (!b) continue;
    for (let k = 0; k < b.length; k++) {
      const S = b[k], a = analyze(S);
      if (a.valid) return render(S);
      if (a.dead) continue;
      const moves = a.fill ? [a.fill] : a.branch.map(x => [x]);
      for (const mv of moves) {
        const T = S.slice();
        for (const x of mv) T[x] = 1;
        const key = T.join('');
        if (seen.has(key)) continue;
        seen.add(key);
        (buckets[cost + mv.length] = buckets[cost + mv.length] || []).push(T);
      }
    }
  }
  return '';
}
