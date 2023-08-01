function points(games) {
  let gamePoints = 0;
    for (let i = 0; i < games.length ; ++i) {
      if (games[i][0] > games[i][2]) {gamePoints = gamePoints + 3}; 
      if (games[i][0] === games[i][2]) {gamePoints = gamePoints + 1};
    }
  return gamePoints;
}
