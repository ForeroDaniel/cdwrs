var paintLetterboxes = function(start, end) {
  // Initialize an array with 10 zeros to store the counts for digits 0 through 9.
  const digitCounts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  // Loop through every number from the start to the end, inclusive.
  for (let i = start; i <= end; i++) {
    // Convert the current number to a string to easily iterate over its digits. [5]
    let numberAsString = String(i);

    // Loop through each character (digit) of the string representation of the number.
    for (const digit of numberAsString) {
      // Use the digit as an index to increment the corresponding counter in the array.
      // The character is implicitly converted to a number when used as an array index.
      digitCounts[digit]++;
    }
  }

  // Return the array containing the final digit frequencies.
  return digitCounts;
}
