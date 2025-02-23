function playPass(text, shift) {
    let result = '';

  // Step 1: Process each character in the text
  for (let i = 0; i < text.length; i++) {
    let char = text[i];

    // Handle letters (shift them and apply case transformation)
    if (/[A-Za-z]/.test(char)) {
      let isUpperCase = char === char.toUpperCase();
      let charCode = char.charCodeAt(0);

      // Shift letter by 'shift' value, handling circular shift
      if (isUpperCase) {
        char = String.fromCharCode(((charCode - 65 + shift) % 26 + 26) % 26 + 65); // Uppercase letters
      } else {
        char = String.fromCharCode(((charCode - 97 + shift) % 26 + 26) % 26 + 97); // Lowercase letters
      }

      // Step 2: Change letter case based on position (even or odd index)
      if (i % 2 === 0) {
        char = char.toUpperCase();
      } else {
        char = char.toLowerCase();
      }
    }
    // Handle digits (complement to 9)
    else if (/[0-9]/.test(char)) {
      char = (9 - parseInt(char)).toString();
    }

    // Append the processed character to the result
    result += char;
  }

  // Step 3: Reverse the result string
  return result.split('').reverse().join('');
}
