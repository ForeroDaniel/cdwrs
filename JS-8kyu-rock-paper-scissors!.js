const rps = (p1, p2) => {
  if (p1 === p2) return 'Draw!';
  switch (p1) {
      case 'rock': return p2 === 'paper' ? 'Player 2 won!' : 'Player 1 won!';
      case 'paper': return p2 === 'scissors' ? 'Player 2 won!' : 'Player 1 won!';
      case 'scissors': return p2 === 'rock' ? 'Player 2 won!' : 'Player 1 won!';
  }
};
