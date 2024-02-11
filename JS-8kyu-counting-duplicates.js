function duplicateCount(text) {
  const charCount = {};
  const duplicates = [];

  text.toLowerCase().split('').forEach(char => {
    charCount[char] = (charCount[char] || 0) + 1;
    if (charCount[char] === 2) {
      duplicates.push(char);
    }
  });

  return duplicates.length;
}
