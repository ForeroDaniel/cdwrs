function factorial(n){
  if (n === 0) return 1;
  if (n > 0 && n < 13) {
    let result = 1; // Initialize result to 1
    while (n > 1) {
      result *= n; // Multiply by n, not n - 1
      n--; // Decrement n
    }
    return result;
  }
  throw new RangeError("The argument must be between 0 and 12.");
}
