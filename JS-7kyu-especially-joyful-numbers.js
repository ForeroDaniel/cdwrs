function numberJoy(n) {
  // Calculate the sum of the digits of n.
  const s = String(n)
    .split('')
    .reduce((sum, digit) => sum + parseInt(digit, 10), 0);

  // Reverse the digit sum 's'.
  const sReversed = parseInt(String(s).split('').reverse().join(''), 10);

  // Check if the product of s and its reversed version equals n.
  return s * sReversed === n;
}
