function pathFinder(maze){
  const rows = maze.split(`\n`).map(l => l.split(``));
  const n = rows.length - 1;
  const moveTo = (x, y) => {
    if (x < 0 || y < 0 || x > n || y > n || rows[y][x] !== '.') {
      return false;
    }
    
    if (x === n && y === n) {
      return true;
    }
    
    rows[y][x] = `x`;
    
    return moveTo(x - 1, y)
      || moveTo(x + 1, y)
      || moveTo(x, y - 1)
      || moveTo(x, y + 1);
  }
  
  return moveTo(0, 0);
}
