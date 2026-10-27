function mazeSolver(maze) {
  const R = maze.length, C = maze[0].length;
  const MASK = [8, 1, 2, 4];
  const DR = [-1, 0, 1, 0], DC = [0, 1, 0, -1], L = ['N', 'E', 'S', 'W'];
  const val = [];
  let start = -1, end = -1;
  for (let r = 0; r < R; r++) for (let c = 0; c < C; c++) {
    const v = maze[r][c], i = r * C + c;
    if (v === 'B') { start = i; val.push(0); }
    else if (v === 'X') { end = i; val.push(0); }
    else val.push(v);
  }
  const wall = (cell, d, t) => (val[cell] & MASK[(((d - t) % 4) + 4) % 4]) !== 0;
  const visited = [];
  for (let p = 0; p < 4; p++) visited.push(new Uint8Array(R * C));
  const reachLevels = [];
  let frontier = [start];
  visited[0][start] = 1;
  for (let t = 0; frontier.length; t++) {
    const reach = new Map();
    const queue = [];
    for (const s of frontier) { reach.set(s, { src: s, str: '' }); queue.push(s); }
    for (let qi = 0; qi < queue.length; qi++) {
      const cur = queue[qi], info = reach.get(cur);
      const r = (cur / C) | 0, c = cur % C;
      for (let d = 0; d < 4; d++) {
        const nr = r + DR[d], nc = c + DC[d];
        if (nr < 0 || nr >= R || nc < 0 || nc >= C) continue;
        const nx = nr * C + nc;
        if (reach.has(nx)) continue;
        if (wall(cur, d, t) || wall(nx, (d + 2) % 4, t)) continue;
        reach.set(nx, { src: info.src, str: info.str + L[d] });
        queue.push(nx);
      }
    }
    reachLevels.push(reach);
    if (reach.has(end)) {
      const out = [];
      let cell = end;
      for (let k = t; k >= 0; k--) {
        const e = reachLevels[k].get(cell);
        out.push(e.str);
        cell = e.src;
      }
      return out.reverse();
    }
    const p = (t + 1) % 4, next = [];
    for (const cell of queue) {
      if (!visited[p][cell]) { visited[p][cell] = 1; next.push(cell); }
    }
    frontier = next;
  }
  return null;
}
