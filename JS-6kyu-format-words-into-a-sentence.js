function formatWords(words) {
  if (!words) return "";

  // Filter out any empty string values.
  const filteredWords = words.filter(word => word.length > 0);

  // Handle cases where the filtered array has 0, 1, or more than 1 word.
  if (filteredWords.length <= 1) return filteredWords.join("");

  // Handle all other cases (2 or more words) by joining them.
  const lastWord = filteredWords.pop();
  return `${filteredWords.join(', ')} and ${lastWord}`;
}
