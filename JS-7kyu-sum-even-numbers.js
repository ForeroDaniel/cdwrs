function sumEvenNumbers(input) {
  return input.filter(x => x % 2 === 0).reduce((acc, x) => acc + x, 0)
}
