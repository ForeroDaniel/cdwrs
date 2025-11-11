function modifiedSum(a, n) {
  const array = a
  .reduce((acc, val) => acc + val, 0)
  const poweredArray = a
  .map(number => number ** n)
  .reduce((acc, val) => acc + val, 0)
  return poweredArray - array
}
