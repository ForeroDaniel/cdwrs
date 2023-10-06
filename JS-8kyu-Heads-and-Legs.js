function animals(heads, legs){
  let cows = legs / 2 - heads
  let chickens = heads - cows
  
  return legs & 1 || cows < 0 || chickens < 0 ? 'No solutions' : [chickens, cows]
}
