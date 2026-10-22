function square_sums_row(n) {
  if (n === 1) return [1];

  // Perfect squares up to the largest possible sum (n + n-1)
  const isSquare = new Uint8Array(2 * n + 1);
  for (let i = 1; i * i <= 2 * n; i++) isSquare[i * i] = 1;

  // Build adjacency list
  const adj = Array.from({ length: n + 1 }, () => []);
  for (let a = 1; a <= n; a++) {
    for (let b = a + 1; b <= n; b++) {
      if (isSquare[a + b]) {
        adj[a].push(b);
        adj[b].push(a);
      }
    }
  }

  // A number with no partner makes a solution impossible
  for (let i = 1; i <= n; i++) if (adj[i].length === 0) return false;

  const visited = new Uint8Array(n + 1);
  const deg = new Int32Array(n + 1); // unvisited neighbors remaining
  for (let i = 1; i <= n; i++) deg[i] = adj[i].length;

  const path = [];

  function visit(v) {
    visited[v] = 1;
    path.push(v);
    for (const u of adj[v]) deg[u]--;
  }

  function unvisit(v) {
    visited[v] = 0;
    path.pop();
    for (const u of adj[v]) deg[u]++;
  }

  function dfs(v) {
    if (path.length === n) return true;

    const next = [];
    for (const u of adj[v]) if (!visited[u]) next.push(u);
    next.sort((a, b) => deg[a] - deg[b]); // fewest onward options first

    for (const u of next) {
      visit(u);
      if (dfs(u)) return true;
      unvisit(u);
    }
    return false;
  }

  // Try start nodes from lowest degree upward
  const starts = [];
  for (let i = 1; i <= n; i++) starts.push(i);
  starts.sort((a, b) => adj[a].length - adj[b].length);

  for (const s of starts) {
    visit(s);
    if (dfs(s)) return path.slice();
    unvisit(s);
  }
  return false;
}
