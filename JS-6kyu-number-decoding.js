function decode(code) {
  let result = [];
  // Split the input code based on the separator '98'
  let segments = code.split('98');
  
  // Process each segment alternately (text or binary number)
  for (let i = 0; i < segments.length; i++) {
    let segment = segments[i];

    // Skip empty segments that may result from a trailing '98'
    if (segment === '') {
      continue;
    }

    // If it's a binary number (composed of '0' and '1')
    if (/^[01]+$/.test(segment)) {
      // Convert binary string to decimal (base 10)
      result.push(parseInt(segment, 2));
    } else {
      // Decode the text segment: each group of 3 digits represents a letter
      let decodedText = '';
      let j = 0;
      while (j < segment.length) {
        // Take each group of 3 digits, convert to a letter
        let encodedNumber = parseInt(segment.slice(j, j + 3), 10);
        // Ensure it's between 101 and 127 (valid letter encoding range)
        if (encodedNumber >= 101 && encodedNumber <= 127) {
          decodedText += String.fromCharCode(encodedNumber - 100 + 96);  // Convert to alphabet letter
        } else {
          // If it's outside the valid letter range, break the loop
          break;
        }
        j += 3;
      }
      // If we have decoded any text, add it to the result
      if (decodedText.length > 0) {
        result.push(decodedText);
      }
    }
  }
  
  // Join the decoded parts with a comma and return without an extra comma at the end
  return result.join(', ');
}
