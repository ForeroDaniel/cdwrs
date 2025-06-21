function SnakesLadders() {
    this.players = [0, 0]; // Player 1 and Player 2 positions
    this.currentPlayer = 0; // 0 for Player 1, 1 for Player 2
    this.gameOver = false;
    this.ladders = {
        2: 38,
        7: 14,
        8: 31,
        15: 26,
        21: 42,
        28: 84,
        36: 44,
        51: 67,
        71: 91,
        78: 98,
        87: 94
    };
    this.snakes = {
        16: 6,
        46: 25,
        49: 11,
        62: 19,
        64: 60,
        74: 53,
        89: 68,
        92: 88,
        95: 75,
        99: 80
    };
}

SnakesLadders.prototype.play = function(die1, die2) {
    if (this.gameOver) {
        return "Game over!";
    }

    const sum = die1 + die2;
    let player = this.currentPlayer;
    let newPosition = this.players[player] + sum;

    // Handle bounce if over 100
    if (newPosition > 100) {
        newPosition = 100 - (newPosition - 100);
    }

    // Check for ladders or snakes
    if (this.ladders[newPosition]) {
        newPosition = this.ladders[newPosition];
    } else if (this.snakes[newPosition]) {
        newPosition = this.snakes[newPosition];
    }

    this.players[player] = newPosition;

    // Check for win
    if (newPosition === 100) {
        this.gameOver = true;
        return `Player ${player + 1} Wins!`;
    }

    // Switch player if not a double
    if (die1 !== die2) {
        this.currentPlayer = this.currentPlayer === 0 ? 1 : 0;
    }

    return `Player ${player + 1} is on square ${newPosition}`;
};
