function pathFinder(maze) {
  // Convert the maze string into a 2D array
  const grid = maze.split('\n').map(row => row.split(''));
  const N = grid.length;
  
  // Directions for North, East, South, West
  const directions = [
    [-1, 0], // North
    [1, 0],  // South
    [0, -1], // West
    [0, 1]   // East
  ];

  // BFS Queue: stores [row, col, distance]
  const queue = [[0, 0, 0]];
  
  // Set to keep track of visited coordinates to avoid infinite loops
  // We use a string format "row,col" for the Set
  const visited = new Set();
  visited.add("0,0");

  while (queue.length > 0) {
    const [r, c, dist] = queue.shift();

    // Check if we reached the exit
    if (r === N - 1 && c === N - 1) {
      return dist;
    }

    // Explore neighbors
    for (const [dr, dc] of directions) {
      const nr = r + dr;
      const nc = c + dc;

      // Check boundaries, walls ('W'), and if already visited
      if (
        nr >= 0 && nr < N && 
        nc >= 0 && nc < N && 
        grid[nr][nc] === '.' && 
        !visited.has(`${nr},${nc}`)
      ) {
        visited.add(`${nr},${nc}`);
        queue.push([nr, nc, dist + 1]);
      }
    }
  }

  // If the queue is empty and exit wasn't reached
  return false;
}
