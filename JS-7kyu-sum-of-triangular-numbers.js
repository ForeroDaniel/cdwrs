function sumTriangularNumbers(n) {
  // Return 0 if the input is negative
  if (n < 0) return 0;

  let sum = 0;

  // Loop through the first n triangular numbers
  for (let i = 1; i <= n; i++) {
    // Calculate the ith triangular number using the formula T_n = n * (n + 1) / 2
    let triangularNumber = (i * (i + 1)) / 2;
    // Add it to the sum
    sum += triangularNumber;
  }

  return sum;
}
