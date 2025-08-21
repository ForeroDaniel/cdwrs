// Calculates the Greatest Common Divisor
const gcd = (a, b) => {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

// Calculates the Least Common Multiple
const lcm = (a, b) => { return (a * b) / gcd(a, b); };

function nbrOfLaps(x, y) {
  const commonDistance = lcm(x, y);
  const bobLaps = commonDistance / x;
  const charlesLaps = commonDistance / y;

  return [bobLaps, charlesLaps];
};
