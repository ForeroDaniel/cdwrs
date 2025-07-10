function encode(str,  n){
  // Convert the key into an array of digits
  const keyDigits = n.toString().split('').map(Number);
  let keyIndex = 0;

  // Convert each character to its alphabet position and add the corresponding key digit
  const result = str.toLowerCase().split('').map(char => {
      const alphabetPos = char.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
      const currentKeyDigit = keyDigits[keyIndex % keyDigits.length];
      keyIndex++;
      return alphabetPos + currentKeyDigit;
  });

  return result;
}
