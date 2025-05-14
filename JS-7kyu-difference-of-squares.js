function differenceOfSquares(n) {
  let sumOfNumbers = 0;
  let sumOfSquares = 0;
  
  for (let i = 1; i <= n; i++) {
    sumOfNumbers += i;      // Add to sum for (1 + 2 + ... + n)²
    sumOfSquares += i * i;  // Add square for 1² + 2² + ... + n²
  }
  
  return sumOfNumbers ** 2 - sumOfSquares;
}
