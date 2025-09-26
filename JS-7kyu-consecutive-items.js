function consecutive(arr, a, b) {
  const indexA = arr.indexOf(a);
  const indexB = arr.indexOf(b);

  return Math.abs(indexA - indexB) === 1;
}
