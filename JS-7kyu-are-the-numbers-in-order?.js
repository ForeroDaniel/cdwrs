function inAscOrder(arr) {
  if (arr.length < 2) return true;
  return JSON.stringify(arr) === JSON.stringify(arr.sort((a, b) => a - b));
}
