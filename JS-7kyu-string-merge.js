function stringMerge(word1, word2, letter) {
    const index1 = word1.indexOf(letter);
    const index2 = word2.indexOf(letter);
    return word1.substring(0, index1) + word2.substring(index2);
}
