function removeSmallest(numbers) {
  const smallestIndex = numbers.indexOf(Math.min(...numbers));
  return numbers.filter((_, idx) => idx !== smallestIndex);
}
