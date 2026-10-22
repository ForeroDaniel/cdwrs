function solvePuzzle(clues) {
  const N = 7;

  // All permutations of 1..7 (flat), with visibility counts from each end
  const perms = [];
  (function gen(cur, used) {
    if (cur.length === N) { perms.push(cur.slice()); return; }
    for (let v = 1; v <= N; v++) {
      if (used & (1 << v)) continue;
      cur.push(v);
      gen(cur, used | (1 << v));
      cur.pop();
    }
  })([], 0);

  const P = perms.length;
  const fwd = new Uint8Array(P), bwd = new Uint8Array(P);
  for (let k = 0; k < P; k++) {
    const p = perms[k];
    let max = 0, c = 0;
    for (let i = 0; i < N; i++) if (p[i] > max) { max = p[i]; c++; }
    fwd[k] = c;
    max = 0; c = 0;
    for (let i = N - 1; i >= 0; i--) if (p[i] > max) { max = p[i]; c++; }
    bwd[k] = c;
  }

  // Lines 0..6 = rows, 7..13 = columns
  // Row i: left = clues[27 - i], right = clues[7 + i]
  // Col j: top  = clues[j],      bottom = clues[20 - j]
  const lineCells = [];
  const lineStart = [];
  for (let i = 0; i < N; i++) {
    const idx = [];
    for (let k = 0; k < N; k++) idx.push(i * N + k);
    lineCells.push(idx);
    lineStart.push(clues[27 - i]); // clue read along direction of increasing index
  }
  for (let j = 0; j < N; j++) {
    const idx = [];
    for (let k = 0; k < N; k++) idx.push(k * N + j);
    lineCells.push(idx);
    lineStart.push(clues[j]);
  }
  const lineEnd = [];
  for (let i = 0; i < N; i++) lineEnd.push(clues[7 + i]);
  for (let j = 0; j < N; j++) lineEnd.push(clues[20 - j]);

  const FULL = 0b11111110; // bits 1..7

  // Initial candidate lists per line
  const lists0 = [];
  for (let L = 0; L < 14; L++) {
    const a = lineStart[L], b = lineEnd[L];
    const list = [];
    for (let k = 0; k < P; k++) {
      if (a && fwd[k] !== a) continue;
      if (b && bwd[k] !== b) continue;
      list.push(k);
    }
    lists0.push(list);
  }
  const cm0 = new Int16Array(49).fill(FULL);

  function propagate(cm, lists) {
    let changed = true;
    while (changed) {
      changed = false;
      for (let L = 0; L < 14; L++) {
        const cells = lineCells[L];
        const old = lists[L];
        const m0 = cm[cells[0]], m1 = cm[cells[1]], m2 = cm[cells[2]],
              m3 = cm[cells[3]], m4 = cm[cells[4]], m5 = cm[cells[5]],
              m6 = cm[cells[6]];
        const nl = [];
        let u0 = 0, u1 = 0, u2 = 0, u3 = 0, u4 = 0, u5 = 0, u6 = 0;
        for (let t = 0; t < old.length; t++) {
          const p = perms[old[t]];
          const b0 = 1 << p[0], b1 = 1 << p[1], b2 = 1 << p[2],
                b3 = 1 << p[3], b4 = 1 << p[4], b5 = 1 << p[5],
                b6 = 1 << p[6];
          if ((m0 & b0) && (m1 & b1) && (m2 & b2) && (m3 & b3) &&
              (m4 & b4) && (m5 & b5) && (m6 & b6)) {
            nl.push(old[t]);
            u0 |= b0; u1 |= b1; u2 |= b2; u3 |= b3;
            u4 |= b4; u5 |= b5; u6 |= b6;
          }
        }
        if (nl.length === 0) return false;
        if (nl.length !== old.length) { lists[L] = nl; changed = true; }
        const us = [u0, u1, u2, u3, u4, u5, u6];
        for (let k = 0; k < N; k++) {
          const c = cells[k];
          const nm = cm[c] & us[k];
          if (nm !== cm[c]) { cm[c] = nm; changed = true; }
        }
      }
    }
    return true;
  }

  function search(cm, lists) {
    if (!propagate(cm, lists)) return null;

    // choose line with the fewest candidates (>1)
    let best = -1, bestLen = Infinity;
    for (let L = 0; L < 14; L++) {
      const len = lists[L].length;
      if (len > 1 && len < bestLen) { bestLen = len; best = L; }
    }
    if (best === -1) {
      const res = [];
      for (let i = 0; i < N; i++) {
        const row = [];
        for (let j = 0; j < N; j++) row.push(31 - Math.clz32(cm[i * N + j]));
        res.push(row);
      }
      return res;
    }

    const cells = lineCells[best];
    const cands = lists[best];
    for (let t = 0; t < cands.length; t++) {
      const p = perms[cands[t]];
      const cm2 = cm.slice();
      for (let k = 0; k < N; k++) cm2[cells[k]] = 1 << p[k];
      const lists2 = lists.slice();
      lists2[best] = [cands[t]];
      const r = search(cm2, lists2);
      if (r) return r;
    }
    return null;
  }

  return search(cm0, lists0);
}
