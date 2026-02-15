function deleteDigit(n) {
  const s = String(n)
  return Math.max(...Array.from(s, (_, i) => s.slice(0, i) + s.slice(i + 1)))
}
