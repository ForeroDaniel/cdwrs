var solution = function(firstArray, secondArray) {
  let sum = 0;
  const length = firstArray.length;
  for (let i = 0; i < length; i++) {
    const diff = Math.abs(firstArray[i] - secondArray[i]);
    sum += diff * diff
  }
  return sum / length
}
