function missingNo(nums) {
  const n = 100;
  const expectedSum = (n * (n + 1)) / 2; // equals 5050

  const actualSum = nums.reduce((acc, num) => acc + num, 0);

  return expectedSum - actualSum;
}
