function maxProduct(numbers, k) {
  // Sort the array in ascending order
  numbers.sort((a, b) => a - b);

  const n = numbers.length;

  // Calculate the product of the k largest numbers
  let product = 1;
  for (let i = n - k; i < n; i++) {
    product *= numbers[i];
  }

  return product;
}
