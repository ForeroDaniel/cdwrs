function iterPi(epsilon) {
	var pi = 0, iterations = 0, factor = 1, divider = 1;
  while (Math.abs(Math.PI - (pi * 4)) >= epsilon) {
    pi += factor / divider;
    factor = -factor;
    divider += 2;
    iterations += 1;
  }
  return [iterations, +(pi * 4).toFixed(10)];
}
