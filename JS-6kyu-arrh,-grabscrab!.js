function grabscrab(anagram, dictionary) {
  // Helper function to normalize a word by sorting its characters.
  // This allows for easy comparison of anagrams.
  const normalizeWord = (word) => {
    return word.split('').sort().join('');
  };

  // Normalize the input anagram once.
  const normalizedAnagram = normalizeWord(anagram);

  // Filter the dictionary to find words that are anagrams of the input.
  // We iterate through each word in the dictionary.
  const matchingWords = dictionary.filter(word => {
    // Normalize the current dictionary word.
    const normalizedDictionaryWord = normalizeWord(word);
    // Compare the normalized dictionary word with the normalized input anagram.
    // If they are identical, it means the dictionary word is an anagram.
    return normalizedDictionaryWord === normalizedAnagram;
  });

  // Return the array of matching words, preserving their order from the dictionary.
  return matchingWords;
}
