function alphabetPosition(text) {
  const lowercaseText = text.toLowerCase();
  const alphabetNumbers = [];
  
  for (let i = 0 ; i < text.length ; ++i ){
    const charCode = lowercaseText.charCodeAt(i);
    // Check if the character is a lowercase letter
    if (charCode >= 97 && charCode <= 122) {
      // Map the letter to its position in the alphabet (a=1, b=2, ..., z=26)
      alphabetNumbers.push(charCode - 96);
    }
  }
  
  return alphabetNumbers.join(' ');
}
