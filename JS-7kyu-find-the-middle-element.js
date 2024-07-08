function gimme(triplet) {
  const max = Math.max(...triplet);
  const min = Math.min(...triplet);
  return triplet.findIndex(e => e !== max && e !== min);
}
