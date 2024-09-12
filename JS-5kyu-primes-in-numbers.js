function primeFactors(n) {
  let factors = {};
  for (let i = 2; i <= n; i++) {
    while (n % i === 0) {
      factors[i] = (factors[i] || 0) + 1;
      n /= i;
    }
  }
  return Object.entries(factors)
    .map(([factor, count]) => (count > 1 ? `(${factor}**${count})` : `(${factor})`))
    .join("");
}
