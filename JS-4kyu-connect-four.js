function whoIsWinner(piecesPositionList) {
    const ROWS = 6;
    const COLS = 7;
    // Initialize an empty board with nulls
    const board = Array(ROWS).fill(0).map(() => Array(COLS).fill(null));

    // Map column letters to their index (A=0, B=1, ..., G=6)
    const colMap = {
        'A': 0, 'B': 1, 'C': 2, 'D': 3, 'E': 4, 'F': 5, 'G': 6
    };

    /**
     * Checks if a player has won given their last played position.
     * @param {number} r The row of the last piece played.
     * @param {number} c The column of the last piece played.
     * @param {string} player The color of the player who just moved ("Red" or "Yellow").
     * @returns {boolean} True if the player has won, false otherwise.
     */
    const checkWin = (r, c, player) => {
        // Directions to check: horizontal, vertical, diagonal (top-left to bottom-right), diagonal (top-right to bottom-left)
        const directions = [
            [0, 1],   // Horizontal
            [1, 0],   // Vertical
            [1, 1],   // Diagonal \
            [1, -1]   // Diagonal /
        ];

        for (const [dr, dc] of directions) {
            let count = 1; // Count of consecutive pieces, starting with the last placed piece

            // Check in the positive direction
            for (let i = 1; i < 4; i++) {
                const nr = r + i * dr;
                const nc = c + i * dc;
                if (nr >= 0 && nr < ROWS && nc >= 0 && nc < COLS && board[nr][nc] === player) {
                    count++;
                } else {
                    break;
                }
            }

            // Check in the negative direction (if applicable, for horizontal and diagonal)
            for (let i = 1; i < 4; i++) {
                const nr = r - i * dr;
                const nc = c - i * dc;
                if (nr >= 0 && nr < ROWS && nc >= 0 && nc < COLS && board[nr][nc] === player) {
                    count++;
                } else {
                    break;
                }
            }

            if (count >= 4) {
                return true;
            }
        }
        return false;
    };

    for (const move of piecesPositionList) {
        const [colChar, player] = move.split('_');
        const colIdx = colMap[colChar];

        // Find the lowest available row in the column
        let rowIdx = -1;
        for (let r = ROWS - 1; r >= 0; r--) {
            if (board[r][colIdx] === null) {
                rowIdx = r;
                break;
            }
        }

        // If the column is full, this move is invalid (though the problem implies valid moves)
        if (rowIdx === -1) {
            // This scenario should ideally be handled if invalid moves are possible,
            // but for this problem, we assume valid moves into non-full columns.
            // For robustness, you might throw an error or handle it differently.
            continue;
        }

        // Place the piece
        board[rowIdx][colIdx] = player;

        // Check for a win after placing the piece
        if (checkWin(rowIdx, colIdx, player)) {
            return player;
        }
    }

    // If no winner after all moves, it's a Draw
    return "Draw";
}
