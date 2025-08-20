function removeParentheses(s) {
  let result = [];          // Array to build the new string efficiently
  let parenthesesCount = 0; // Counter to track the current nesting level of parentheses

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (char === '(') parenthesesCount++;
    else if (char === ')') parenthesesCount--;
    else {
      // If the character is not a parenthesis AND we are outside any parentheses (count is 0),
      // then this character should be part of the final result.
      if (parenthesesCount === 0) {
        result.push(char);
      }
    }
  }

  return result.join('');
}
