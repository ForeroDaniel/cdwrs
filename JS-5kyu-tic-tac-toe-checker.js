function isSolved(board) {
    // Check for winning combinations
    const winningCombos = [
        // Rows
        [board[0][0], board[0][1], board[0][2]],
        [board[1][0], board[1][1], board[1][2]],
        [board[2][0], board[2][1], board[2][2]],
        // Columns
        [board[0][0], board[1][0], board[2][0]],
        [board[0][1], board[1][1], board[2][1]],
        [board[0][2], board[1][2], board[2][2]],
        // Diagonals
        [board[0][0], board[1][1], board[2][2]],
        [board[0][2], board[1][1], board[2][0]],
    ];

    for (const combo of winningCombos) {
        if (combo[0] !== 0 && combo[0] === combo[1] && combo[1] === combo[2]) {
            return combo[0]; // Return the winner (1 or 2)
        }
    }

    // Check for empty spots
    for (let row of board) {
        if (row.includes(0)) {
            return -1; // Game is not finished
        }
    }

    return 0; // It's a draw
}
