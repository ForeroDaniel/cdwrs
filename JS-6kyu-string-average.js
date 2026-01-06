function averageString(str) {
  const numWords = [
    "zero", "one", "two", "three", "four", 
    "five", "six", "seven", "eight", "nine"
  ];

  if (!str) return "n/a";

  const words = str.split(" ");
  let sum = 0;

  for (let word of words) {
    const value = numWords.indexOf(word);
    
    if (value === -1) return "n/a";

    sum += value;
  }

  const average = Math.floor(sum / words.length);

  return numWords[average];
}
