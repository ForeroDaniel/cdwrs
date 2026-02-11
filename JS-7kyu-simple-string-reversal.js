function solve(str) {
  // 1. Extract the characters without spaces
  // 2. Reverse that collection
  const charsOnlyReversed = str
    .replace(/\s/g, "") // remove all spaces
    .split("")          // turn into array
    .reverse();         // reverse the order

  let result = "";
  let charPointer = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      // If original character was a space, keep the space
      result += " ";
    } else {
      // If it was a letter, take the next letter from our reversed collection
      result += charsOnlyReversed[charPointer];
      charPointer++;
    }
  }

  return result;
}
