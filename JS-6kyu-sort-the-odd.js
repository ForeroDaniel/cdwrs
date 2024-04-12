function sortArray(arr) {
  const isOdd = e => Math.abs(e) % 2 === 1;
  const ascendingOdd = arr.filter(isOdd).sort((a, b) => a - b)
  return arr.map(e => isOdd(e) ? ascendingOdd.shift() : e)
}
