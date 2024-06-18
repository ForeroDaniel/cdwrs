function incrementString (str) {
  let numbers = str.match(/\d+$/);
    
  // If numbers are found at the end of the string
  if (numbers !== null) {
    // Increment the matched number by 1
    let incrementedNumber = parseInt(numbers[0]) + 1;
    // Replace the matched number in the string with the incremented number
    return str.replace(/\d+$/, incrementedNumber.toString().padStart(numbers[0].length, '0'));
  } else {
    // If no numbers are found, append '1' to the string
    return str + '1';
  }
}
