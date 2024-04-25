function high(x) {
  const words = x.split(' ');
  let highestWord = '';
  let highestScore = 0;

  for (let i = 0; i < words.length; ++i) {
    let wordScore = 0;

    for (let char = 0; char < words[i].length; ++char) {
      const charCode = words[i].charCodeAt(char);

      // Check if the character is a lowercase letter
      if (charCode >= 97 && charCode <= 122) {
        // Map the letter to its position in the alphabet (a=1, b=2, ..., z=26)
        wordScore += charCode - 96;
      }
    }

    // Check if the current word has a higher score
    if (wordScore > highestScore) {
      highestScore = wordScore;
      highestWord = words[i];
    }
  }

  return highestWord;
}
