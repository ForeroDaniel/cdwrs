function lastDigit(as) {
  if (as.length === 0) return 1;

  /**
   * Helper to compute (base ^ exp) "capped" at 4.
   * If the result is < 4, returns the result.
   * If the result is >= 4, returns (result % 4) + 4.
   */
  function reduce(base, exp) {
    // 0^0 = 1 as per requirements
    if (exp === 0) return 1;
    if (base === 0) return 0;
    if (base === 1) return 1;
    
    // If exp is 1, return base capped at 4
    if (exp === 1) {
      let b = Number(BigInt(base) % 4n);
      return base < 4 ? Number(base) : b + 4;
    }

    // For base >= 2 and exp >= 2, base^exp is always >= 4.
    // We compute (base^exp % 4) + 4.
    // Since phi(4) = 2, we use the exponent mod 2.
    // base^exp % 4 == (base % 4)^(exp % 2 + 2) % 4
    let b = BigInt(base) % 4n;
    let e = BigInt(exp) % 2n + 2n;
    let rem = Number(b ** e % 4n);
    return rem + 4;
  }

  // Calculate the exponent for the first element by reducing the rest of the list
  let res = 1;
  for (let i = as.length - 1; i > 0; i--) {
    res = reduce(as[i], res);
  }

  // Final calculation: x1 ^ res % 10
  // Apply the same logic: if res >= 4, use (res % 4) + 4
  let base = BigInt(as[0]) % 10n;
  let exponent = res < 4 ? BigInt(res) : BigInt(res % 4 + 4);
  
  return Number(base ** exponent % 10n);
}
