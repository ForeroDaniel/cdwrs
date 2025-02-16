const orderedCount = function (text) {
  const counts = new Map()
  
  for (const char of text) {
    const currentCount = counts.get(char) ?? 0
    counts.set(char, currentCount + 1)
  }
  
  return Array.from(counts)
}
