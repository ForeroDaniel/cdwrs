function validateWord(s) {
  s = s.toLowerCase();

  const counts = {};
  
  for (let char of s) {
    counts[char] = (counts[char] || 0) + 1;
  }
  
  const frequencies = Object.values(counts);
  
  return frequencies.every(val => val === frequencies[0]);
}
