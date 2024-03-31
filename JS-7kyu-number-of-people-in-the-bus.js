var number = function(busStops){
  let count = 0;
  for(let [i, o] of busStops){
    count += i;
    count -= o;
  }
  return count;
}
