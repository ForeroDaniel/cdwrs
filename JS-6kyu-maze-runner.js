function mazeRunner(maze, directions) {
    // Find the starting position (2)
    let startX, startY;
    for (let i = 0; i < maze.length; i++) {
        for (let j = 0; j < maze[i].length; j++) {
            if (maze[i][j] === 2) {
                startX = i;
                startY = j;
                break;
            }
        }
        if (startX !== undefined) break;
    }

    let x = startX;
    let y = startY;

    for (const dir of directions) {
        // Update position based on direction
        switch (dir) {
            case 'N': x--; break;
            case 'S': x++; break;
            case 'E': y++; break;
            case 'W': y--; break;
        }

        // Check if out of bounds
        if (x < 0 || x >= maze.length || y < 0 || y >= maze[0].length) {
            return 'Dead';
        }

        // Check current cell
        const cell = maze[x][y];
        if (cell === 1) {
            return 'Dead';
        } else if (cell === 3) {
            return 'Finish';
        }
    }

    // If all directions processed and not finished or dead
    return 'Lost';
}
