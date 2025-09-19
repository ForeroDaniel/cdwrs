const countOddPentaFib = n =>
  n < 2 ? n : 2 * Math.floor(n / 6 + 1) + Math.min(-1, -3 + n % 6)
