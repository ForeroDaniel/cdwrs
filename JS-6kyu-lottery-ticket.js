function bingo(ticket, win) {
    let miniWins = 0;
    for (const [str, num] of ticket) {
        let found = false;
        for (const char of str) {
            if (char.charCodeAt(0) === num) {
                found = true;
                break;
            }
        }
        if (found) {
            miniWins++;
        }
    }
    return miniWins >= win ? 'Winner!' : 'Loser!';
}
