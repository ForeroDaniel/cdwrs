function lastDigit(n, d) {
  if (d <= 0) return [];

  const numStr = Math.abs(n).toString();

  const resultStr = numStr.slice(-d);

  return resultStr.split('').map(Number);
}
