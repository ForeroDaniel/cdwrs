function diagonalSum(m){
  return m.reduce(function(s,r,i){return s+r[i]},0)
}
