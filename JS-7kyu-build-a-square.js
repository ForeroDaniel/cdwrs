function generateShape(integer){
  return '+'.repeat(integer).concat('\n').repeat(integer).slice(0, -1)
}
