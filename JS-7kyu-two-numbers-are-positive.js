function twoArePositive(...rest) {
  let count = 0;
  rest.forEach(x => x > 0 && ++count)
  return count > 1 && count < 3;
}
