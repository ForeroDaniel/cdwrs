function allNonConsecutive (arr) {
  return arr.map((n, i) => ({ i, n })).filter((v, i, a) => (i !== 0 && a[i - 1].n != (v.n - 1)))
}
