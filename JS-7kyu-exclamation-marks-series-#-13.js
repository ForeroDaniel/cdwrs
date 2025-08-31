function product(str) {
  // Initialize counters for '!' and '?'.
  let exclamationCount = 0;
  let questionCount = 0;

  // Iterate over each character in the string.
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char === '!') exclamationCount++;
    else if (char === '?') questionCount++;
  }

  // Return the product of the two counts.
  return exclamationCount * questionCount;
}
