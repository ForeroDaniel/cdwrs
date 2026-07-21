function fruit(reels, spins) {
  let map = ['Jack', 'Queen', 'King', 'Bar', 'Cherry', 'Seven', 'Shell', 'Bell', 'Star', 'Wild'];
  
  let [a, b, c] = reels
    .map((reel, i) => map.indexOf(reel[spins[i]]) + 1)
    .sort((a, b) => a - b);

  if (a === b && b === c)
    return a * 10;
    
  if (a === b)
    return c === 10 ? a * 2 : a;
  
  return b === c ? b : 0;
}
