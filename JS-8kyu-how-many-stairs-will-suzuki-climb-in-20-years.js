function stairsIn20(s){
  return s.flat().reduce((acc, x) => acc + x, 0) * 20
}
