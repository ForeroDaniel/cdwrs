function fusc(n) {
  if (n < 2) return n
  if (n & 1) return fusc(n >> 1) + fusc((n >> 1) + 1)
  return fusc(n >> 1)
}
