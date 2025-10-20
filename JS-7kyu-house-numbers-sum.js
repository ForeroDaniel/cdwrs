function houseNumbersSum(inputArray) {
  return inputArray.slice(0, inputArray.indexOf(0)).reduce((s, v) => s+v, 0);
}
