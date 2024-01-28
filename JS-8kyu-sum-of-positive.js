function positiveSum(arr) {
  return arr.filter( x => x >= 0).reduce((acc, x) => acc + x ,0);
}
