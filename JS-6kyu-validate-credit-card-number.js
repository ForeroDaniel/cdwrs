function validate(cardNumber) {
  // Convert the number to a string to handle each digit easily
  const digits = cardNumber.toString().split('').map(Number);

  // Reverse the array to start from the rightmost digit
  digits.reverse();

  // Apply the Luhn algorithm
  let sum = 0;

  for (let i = 0; i < digits.length; i++) {
    let digit = digits[i];

    // Double every other digit starting from the second digit (from the right)
    if (i % 2 === 1) {
      digit *= 2;
      // If doubling results in a number greater than 9, subtract 9
      if (digit > 9) digit -= 9;
    }

    // Add the digit (or modified digit) to the sum
    sum += digit;
  }

  // Check if the sum is divisible by 10
  return sum % 10 === 0;
}
