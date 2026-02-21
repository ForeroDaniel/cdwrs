function collatz(n) {
  // Initialize length at 1 because the starting number is part of the sequence
  let length = 1;

  // Continue the process until n reaches 1
  while (n > 1) {
    if (n % 2 === 0) {
      // If n is even, divide it by 2
      n = n / 2;
    } else {
      // If n is odd, multiply it by 3 and add 1
      n = (n * 3) + 1;
    }
    // Increment the length for each new number in the sequence
    length++;
  }

  return length;
}
