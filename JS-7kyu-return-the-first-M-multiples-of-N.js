function multiples(m, n) {
  return [...Array(m)].map((_, i) => n * (i + 1));
}
