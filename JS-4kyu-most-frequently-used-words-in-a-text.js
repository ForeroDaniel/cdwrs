function topThreeWords(text) {
    // Normalize the text to lowercase and use regex to extract words
    const words = text
        .toLowerCase()
        .match(/(?:\b[a-zA-Z]*'[a-zA-Z]*|[a-zA-Z]+)/g);

    // If there are no words, return an empty array
    if (!words) return [];

    // Count occurrences of each word
    const wordCount = {};
    for (const word of words) {
        if (word) {
            wordCount[word] = (wordCount[word] || 0) + 1;
        }
    }

    // Convert the word count object into an array of [word, count] pairs
    const sortedWords = Object.entries(wordCount)
        .sort((a, b) => b[1] - a[1]) // Sort by count in descending order
        .slice(0, 3) // Take the top 3
        .map(entry => entry[0]); // Extract only the words

    return sortedWords;
}
