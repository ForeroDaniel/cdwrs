const gcd = (a, b) =>
  b ? gcd(b, a % b) : a;

const solution = numbers =>
  numbers.length * numbers.reduce(gcd);
