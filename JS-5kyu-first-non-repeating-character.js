function firstNonRepeatingLetter(s) {
  const count = {};
  
  for (let char of s){
    console.log(char)
    let lowerCaseChar = char.toLowerCase();
    count[lowerCaseChar] = (count[lowerCaseChar] || 0) + 1; 
  }
  
  for (let char of s) {
    console.log(char)
    if (count[char.toLowerCase()] === 1) return char 
  }
  
  return '';
}
