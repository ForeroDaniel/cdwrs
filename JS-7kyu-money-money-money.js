function calculateYears(p, i, t, d) {
  let years = 0;
  for (let iteration = 1; p < d; ++iteration){
    p += (p * i) - (p * i * t);
    years = iteration;
  }
  return years
}
