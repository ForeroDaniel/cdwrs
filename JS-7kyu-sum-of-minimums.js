function sumOfMinimums(arr) {
  arr = arr.map(x => Math.min(...x))
  return arr.reduce((acc,x) => acc + x, 0)
}
