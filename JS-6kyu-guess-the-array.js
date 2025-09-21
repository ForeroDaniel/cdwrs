/**
 * Determines the values in an unknown array of numbers by querying sums of pairs of elements.
 *
 * @param {function(number, number): number} f A function that accepts two different indices,
 *   which are 1 or 2 positions apart, and returns the sum of the elements at those indices.
 * @param {number} n The length of the unknown array. The length will always be at least 3.
 * @returns {number[]} The reconstructed array.
 */
function guess(f, n) {
  const result = new Array(n);

  const s01 = f(0, 1);
  const s02 = f(0, 2);
  const s12 = f(1, 2);

  const sumFirstThree = (s01 + s02 + s12) / 2;

  result[0] = sumFirstThree - s12;
  result[1] = sumFirstThree - s02;
  result[2] = sumFirstThree - s01;

  for (let i = 3; i < n; i++) {
    const sumPair = f(i - 1, i);
    result[i] = sumPair - result[i - 1];
  }

  return result;
}
