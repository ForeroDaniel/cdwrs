function explode(x){
  const filteredArr = x.filter( foo => typeof foo === 'number')
  return filteredArr.length ? Array(filteredArr.reduce(( a, b ) => a + b, 0)).fill(x) : 'Void!'
}
