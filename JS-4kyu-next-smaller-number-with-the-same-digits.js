function nextSmaller(n) {
  const digits = String(n).split('').map(Number);

  // Find the pivot
  let pivot = -1;
  for (let i = digits.length - 1; i > 0; i--) {
    if (digits[i] < digits[i - 1]) {
      pivot = i - 1;
      break;
    }
  }

  // If no pivot is found, return -1
  if (pivot === -1) return -1;

  // Find the largest digit smaller than digits[pivot] to the right of pivot
  let swap = -1;
  for (let i = digits.length - 1; i > pivot; i--) {
    if (digits[i] < digits[pivot]) {
      swap = i;
      break;
    }
  }

  // Swap the pivot and swap candidate
  [digits[pivot], digits[swap]] = [digits[swap], digits[pivot]];

  // Reverse the digits after the pivot to get the largest possible smaller number
  const afterPivot = digits.splice(pivot + 1);
  afterPivot.sort((a, b) => b - a);
  digits.push(...afterPivot);

  // Convert back to a number
  const result = Number(digits.join(''));

  // Check if the result has the same number of digits as the input (no leading zeros)
  if (String(result).length !== digits.length) return -1;

  return result;
}
