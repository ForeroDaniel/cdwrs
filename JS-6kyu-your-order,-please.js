function order(words){
  words = words.split(' ');
  const sortedWords = words.sort((a, b) => {
    const numA = parseInt(a.match(/\d/)[0]); // Extract the number from word A
    const numB = parseInt(b.match(/\d/)[0]); // Extract the number from word B
    return numA - numB; // Compare the numbers
  });
  return sortedWords.join(' ')
}
