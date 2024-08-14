function sumDigits(n) {
  return Math.abs(n).toString().split('').reduce((acc, x) => acc + parseInt(x), 0);
}
