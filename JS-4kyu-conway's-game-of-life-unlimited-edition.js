function getGeneration(cells, generations) {
  const expand = arr => {
    let head = new Array(cells[0].length + 2).fill(0);
    return [head].concat(cells.map(row => [0, ...row, 0])).concat([head]);
  };
  const update = function update(cell, x, y, cnt=0) {
    cnt -= cell[x][y];
    for (let i = x - 1; i <= x + 1; i++) {
      for (let j = y - 1; j <= y + 1; j++)
        cnt += (cell[i] && cell[i][j]) | 0;
    }
    return +((cell[x][y] && cnt == 2) || cnt == 3);
  };
  for (; generations > 0; generations--) {
    cells = expand(cells).map((row, ri, arr) => row.map((e, ci) => update(arr, ri, ci)));
    while (!cells[0].filter(x => x).length)
      cells.shift();
    while (!cells[cells.length - 1].filter(x => x).length)
      cells.pop();
    while (!cells.filter(x => x[0]).length)
      cells.forEach(x => x.shift());
    while (!cells.filter(x => x[x.length - 1]).length)
      cells.forEach(x => x.pop());
  }
  return cells;
}
