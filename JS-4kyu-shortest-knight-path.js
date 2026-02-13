function knight(start, finish) {
    // 1. Helper to convert algebraic notation (e.g., "a3") to [x, y] coordinates
    function toCoords(pos) {
        const x = pos.charCodeAt(0) - 'a'.charCodeAt(0); // 'a' -> 0, 'b' -> 1...
        const y = parseInt(pos[1]) - 1;                // '1' -> 0, '2' -> 1...
        return [x, y];
    }

    const [startX, startY] = toCoords(start);
    const [endX, endY] = toCoords(finish);

    // If start and finish are the same, return 0 moves
    if (startX === endX && startY === endY) return 0;

    // 2. Define the 8 possible legal moves for a knight
    const knightMoves = [
        [2, 1], [2, -1], [-2, 1], [-2, -1],
        [1, 2], [1, -2], [-1, 2], [-1, -2]
    ];

    // 3. BFS Setup
    // Queue stores: [x, y, movesCount]
    let queue = [[startX, startY, 0]];
    
    // Visited set to keep track of squares we've already checked
    // We store coordinates as a string "x,y" for easy lookup
    let visited = new Set();
    visited.add(`${startX},${startY}`);

    while (queue.length > 0) {
        let [currX, currY, dist] = queue.shift();

        // Check all possible knight jumps from the current square
        for (let [dx, dy] of knightMoves) {
            let nextX = currX + dx;
            let nextY = currY + dy;

            // If we reached the target square
            if (nextX === endX && nextY === endY) {
                return dist + 1;
            }

            // Check if the move is valid (on the 8x8 board) and not yet visited
            if (nextX >= 0 && nextX < 8 && nextY >= 0 && nextY < 8) {
                let posKey = `${nextX},${nextY}`;
                if (!visited.has(posKey)) {
                    visited.add(posKey);
                    queue.push([nextX, nextY, dist + 1]);
                }
            }
        }
    }
}
