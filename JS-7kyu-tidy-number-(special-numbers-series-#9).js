function tidyNumber(n) {
  const digits = n.toString().split('');
  return digits.every((x, idx) => idx === digits.length - 1 || x <= digits[idx + 1]);
}
