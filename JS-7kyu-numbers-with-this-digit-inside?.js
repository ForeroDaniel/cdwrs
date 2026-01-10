function numbersWithDigitInside(x, d) {
  let count = 0;
  let sum = 0;
  let product = 1;
  let found = false;
  
  // Convert d to string for easy comparison
  const targetDigit = d.toString();

  for (let i = 1; i <= x; i++) {
    // Check if the number i contains the digit d
    if (i.toString().includes(targetDigit)) {
      count++;
      sum += i;
      product *= i;
      found = true;
    }
  }

  // If no numbers were found, return the specified default array
  if (!found) {
    return [0, 0, 0];
  }

  return [count, sum, product];
}
