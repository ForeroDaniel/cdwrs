function titleCase(title, minorWords = '') {
    // Convert the minor words string to a set of lowercase words
    const minorWordsSet = new Set(minorWords.toLowerCase().split(' '));
    // Split the title string into words
    const words = title.toLowerCase().split(' ');

    // Process the words
    const result = words.map((word, index) => {
        // Capitalize the first word or words not in minor words set
        if (index === 0 || !minorWordsSet.has(word)) {
            return word.charAt(0).toUpperCase() + word.slice(1);
        }
        // Keep the word in lowercase if it is in the minor words set
        return word;
    });

    // Join the words into a single string and return
    return result.join(' ');
}
