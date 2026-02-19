function zipWith(fn, a0, a1) {
  const shortest = a0.length < a1.length ? a0 : a1;
  return shortest.map((_, i) => fn(a0[i], a1[i]));
}
