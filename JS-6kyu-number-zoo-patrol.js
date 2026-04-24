function findNumber(array) {
  return (array.length + 2)*(array.length + 1)/2 - array.reduce(function(l, r) { return l + r; }, 0);
}
