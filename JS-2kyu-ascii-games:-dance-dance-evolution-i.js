function dance(map) {
  const ARROWS = '←↖↑↗→↘↓↙';
  const DR = [0, -1, -1, -1, 0, 1, 1, 1];
  const DC = [-1, -1, 0, 1, 1, 1, 0, -1];
  const grid = map.split('\n').map(r => Array.from(r));
  const R = grid.length, C = grid[0].length;
  const N = R * C;
  let start = -1;
  const arrow = new Array(N).fill(-1);
  for (let r = 0; r < R; r++) {
    for (let c = 0; c < C; c++) {
      const ch = grid[r][c];
      if (ch === 'S') start = r * C + c;
      else arrow[r * C + c] = ARROWS.indexOf(ch);
    }
  }
  if (start < 0) return '';
  const diff = (a, b) => { const d = Math.abs(a - b); return Math.min(d, 8 - d); };
  // adj[u] = list of [v, dir]
  const adj = [];
  for (let u = 0; u < N; u++) {
    adj.push([]);
    const r = (u / C) | 0, c = u % C;
    for (let d = 0; d < 8; d++) {
      const nr = r + DR[d], nc = c + DC[d];
      if (nr < 0 || nc < 0 || nr >= R || nc >= C) continue;
      const v = nr * C + nc;
      if (u !== start && diff(d, arrow[u]) > 2) continue;
      if (v !== start && diff(d, arrow[v]) > 2) continue;
      adj[u].push([v, d]);
    }
  }
  const total = N - 1; // arrow tiles
  let best = [];
  const path = [];
  const visited = new Array(N).fill(false);
  visited[start] = true;

  // upper bound: arrow tiles reachable from u through unvisited tiles
  // that can also reach start (reverse reachability from start through unvisited tiles)
  const radj = Array.from({ length: N }, () => []);
  for (let u = 0; u < N; u++) for (const [v] of adj[u]) radj[v].push(u);

  function bound(u) {
    const seenF = new Array(N).fill(false);
    const stack = [u];
    seenF[u] = true;
    while (stack.length) {
      const x = stack.pop();
      for (const [y] of adj[x]) {
        if (y === start || visited[y] || seenF[y]) continue;
        seenF[y] = true;
        stack.push(y);
      }
    }
    const seenB = new Array(N).fill(false);
    const st2 = [];
    for (const x of radj[start]) if (!visited[x] && x !== start && !seenB[x]) { seenB[x] = true; st2.push(x); }
    while (st2.length) {
      const x = st2.pop();
      for (const y of radj[x]) {
        if (y === start || visited[y] || seenB[y]) continue;
        seenB[y] = true;
        st2.push(y);
      }
    }
    let cnt = 0;
    for (let i = 0; i < N; i++) if (seenF[i] && seenB[i] && i !== u) cnt++;
    return cnt;
  }

  let done = false;
  function dfs(u) {
    if (done) return;
    for (const [v, d] of adj[u]) {
      if (done) return;
      if (v === start) {
        if (path.length + 1 > best.length) {
          best = path.concat([d]);
          if (best.length === total + 1) done = true;
        }
        continue;
      }
      if (visited[v]) continue;
      visited[v] = true;
      path.push(d);
      // path.length moves so far, plus remaining reachable, plus return move
      if (path.length + bound(v) + 1 > best.length) dfs(v);
      path.pop();
      visited[v] = false;
    }
  }
  dfs(start);
  return best.map(d => ARROWS[d]).join('');
}
