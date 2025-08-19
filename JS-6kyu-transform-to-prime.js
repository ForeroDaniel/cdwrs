function minimumNumber(numbers) {
  const isPrime = (num) => {
    if (num <= 1) return false; // Numbers less than or equal to 1 are not prime.
    if (num <= 3) return true; // 2 is the only even prime number.
    if (num % 2 === 0 || num % 3 === 0) return false; // If divisible by 2 or 3, it's not prime.
    for (let i = 5; i * i <= num; i += 6) {    // Check for divisibility from 5 onwards.
      if (num % i === 0 || num % (i + 2) === 0) {
        return false;
      }
    }
    return true;
  };

  const currentSum = numbers.reduce((sum, num) => sum + num, 0);
  let nextPrime = currentSum;
  // Loop indefinitely until a prime number is found.
  while (true) {
    if (isPrime(nextPrime)) break;
    nextPrime++;
  }

  return nextPrime - currentSum;
}
