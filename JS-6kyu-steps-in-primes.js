function isPrime(num) {
  if (num <= 1) return false;

  if (num === 2) return true;

  if (num % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}


function step(g, m, n) {
  for (let i = m; i <= n; i++) {
    if (isPrime(i)) {
      if (isPrime(i + g)) {
        return [i, i + g];
      }
    }
  }
  return null;
}
