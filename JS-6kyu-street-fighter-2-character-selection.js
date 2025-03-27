function streetFighterSelection(fighters, initialPosition, moves) {
    // Destructure initial position into row and column coordinates
    let [row, col] = initialPosition;
    // Array to store hovered characters in order of moves
    const result = [];
    
    // Process each move in the input sequence
    for (const move of moves) {
        // Update position based on move direction
        switch (move) {
            case 'up':
                // Move up: can't go above row 0 (top row)
                row = Math.max(0, row - 1);
                break;
            case 'down':
                // Move down: can't go below row 1 (bottom row)
                row = Math.min(1, row + 1);
                break;
            case 'left':
                // Move left: circular horizontal movement using modulo 6
                // +6 ensures we handle negative values before applying modulo
                col = (col - 1 + 6) % 6;
                break;
            case 'right':
                // Move right: circular horizontal movement using modulo 6
                col = (col + 1) % 6;
                break;
        }
        
        // Record the character at the current position after the move
        // Note: We push even if vertical movement was blocked (same position)
        result.push(fighters[row][col]);
    }
    
    // Return the complete list of hovered characters
    return result;
}
