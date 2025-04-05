function isPP(n) {
  // Edge case: n must be greater than 1
  if (n < 2) return null;

  // Iterate over possible exponents k
  for (let k = 2; k <= Math.log2(n); k++) {
    // Calculate the k-th root of n
    const m = Math.round(Math.pow(n, 1 / k));

    // Check if m^k equals n
    if (Math.pow(m, k) === n) {
      return [m, k];
    }
  }

  // If no pair is found, return null
  return null;
}
