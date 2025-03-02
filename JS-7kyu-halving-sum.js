function halvingSum(n) {
  const arr = [n];
  while(n > 1){
    n = Math.floor(n / 2)
    arr.push(n)
  }
  return arr.reduce((acc, x) => acc + x , 0)
}
