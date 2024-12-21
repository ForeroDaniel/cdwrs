function reverseNumber(n) {
  let isNegative = false;
  if(n < 0) isNegative = true;
  const number = parseInt(n.toString().split('').reverse().join(''));
  return isNegative ? -number : number;
}
