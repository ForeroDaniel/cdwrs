function alphabetWar(fight) {
  const leftSide = { w: 4, p: 3, b: 2, s: 1 };
  const rightSide = { m: 4, q: 3, d: 2, z: 1 };

  // Initialize both scores to 0
  let leftScore = 0;
  let rightScore = 0;

  for (let char of fight) {
    if (leftSide[char]) leftScore += leftSide[char];
    else if (rightSide[char]) rightScore += rightSide[char];
  }

  if (leftScore > rightScore) return "Left side wins!";
  else if (rightScore > leftScore) return "Right side wins!";
  else return "Let's fight again!";
}
