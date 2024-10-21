function encryptThis(message) {
  return message.split(' ').map(word => {
    // Convert the first letter to its ASCII code
    let encryptedWord = word.charCodeAt(0).toString();
    
    // Handle cases where the word length is greater than 1
    if (word.length > 1) {
      let secondLetter = word[1];
      let lastLetter = word[word.length - 1];
      
      // If the word length is exactly 2, just add the last letter to the ASCII code
      if (word.length === 2) {
        encryptedWord += lastLetter;
      } else {
        encryptedWord += lastLetter + word.slice(2, -1) + secondLetter;
      }
    }
    
    return encryptedWord;
  }).join(' ');
}
