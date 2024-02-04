function isIsogram(str){
  const lowercasedStr = str.toLowerCase()
  const letterCount = {};
  for (let letter of lowercasedStr ) {
    if (letterCount[letter]) return false;
    else letterCount[letter] = 1;
  }
  return true
}
