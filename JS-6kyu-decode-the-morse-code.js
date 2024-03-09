decodeMorse = function(morseCode){
  const morseWords = morseCode.trim().split('   ').map(
    word => word.split(' ')
      .map(char => MORSE_CODE[char])
      .join('')
  ).join(' ');
  
  return morseWords;
}
