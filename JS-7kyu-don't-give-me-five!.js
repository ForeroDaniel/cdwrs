function dontGiveMeFive(start, end){
  let count = 0
  for (let i = start; i <= end; ++i){
    if (i.toString().includes('5')) continue;
    count += 1
  }
  return count
}
