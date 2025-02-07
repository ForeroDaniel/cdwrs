function solve(arr) {
  const seen = new Set();
  const result = [];

  // Iterate in reverse order
  for (let i = arr.length - 1; i >= 0; i--) {
    if (!seen.has(arr[i])) {
      seen.add(arr[i]);
      result.unshift(arr[i]); // Add to the front of the result array
    }
  }

  return result;
}
