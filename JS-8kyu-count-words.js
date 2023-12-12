function countWords(str) {
  // Use a regular expression to split the string into words
  const words = str.trim().split(/\s+/);

  // Filter out empty strings
  const nonEmptyWords = words.filter(word => word.length > 0);

  // Return the count of non-empty words
  return nonEmptyWords.length;
}
