const squaresNeeded = (grains) => {
  if (!grains) return 0;
  return grains.toString(2).length;
}
