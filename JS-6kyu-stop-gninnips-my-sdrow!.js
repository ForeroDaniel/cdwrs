function spinWords(string) {
  const wordArray = string.split(' ');

  const reversedWords = wordArray.map(word => {
    return word.length >= 5 ? word.split('').reverse().join('') : word;
  });

  return reversedWords.join(' ');
}
