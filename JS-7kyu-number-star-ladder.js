function pattern(n){
  var result = '1'
  for (var i = 2; i <= n; i++){
    result += '\n1' + '*'.repeat(i-1) + i
  }
  return result
}
