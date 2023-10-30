function squaresOnly(array) {
  return array.filter(x=>Number.isInteger(Math.sqrt(x)));
}
