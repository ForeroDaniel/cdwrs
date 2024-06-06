function sumDigPow(a, b) {
  const result = [];
  for (let i = a; i <= b; ++i){
    result.push(i)
  }
  return result.filter(function(x){
    return x === x.toString()
                  .split('')
                  .map((e, idx) => Math.pow(parseInt(e), idx + 1))
                  .reduce((acc, e) => acc + e, 0)
         
  })
}
