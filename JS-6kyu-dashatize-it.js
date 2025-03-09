function dashatize(num) {
  // Convert the number to a string
  const str = Math.abs(num).toString(); // Remove the negative sign for formatting
  let result = '';

  // Iterate over each digit in the string
  for (let i = 0; i < str.length; i++) {
    const currentDigit = str[i];

    // If the digit is odd, surround it with dashes
    if (parseInt(currentDigit) % 2 !== 0) {
      // Add a dash before the odd digit, but not before the first character
      if (i > 0 && result[result.length - 1] !== '-') {
        result += '-';
      }
      result += currentDigit;
      // Add a dash after the odd digit, but not after the last character
      if (i < str.length - 1) {
        result += '-';
      }
    } else {
      result += currentDigit;
    }
  }

  // Remove leading or trailing dash if they exist
  if (result[0] === '-') result = result.slice(1);
  if (result[result.length - 1] === '-') result = result.slice(0, -1);

  return result;
}
