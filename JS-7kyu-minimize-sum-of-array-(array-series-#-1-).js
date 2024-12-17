function minSum(arr) {
  arr.sort((a, b) => a - b);

  let sum = 0;
  const len = arr.length;

  for (let i = 0; i < len / 2; i++) {
      sum += arr[i] * arr[len - 1 - i];
  }

  return sum;
}
