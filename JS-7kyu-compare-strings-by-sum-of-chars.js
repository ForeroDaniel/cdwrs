function compare(s1, s2) {
  const calculateAsciiSum = (str) => {
    // Treat null as an empty string.
    const currentStr = str || "";

    // If the string contains any non-letter characters, treat it as empty (sum = 0).
    if (/[^a-zA-Z]/.test(currentStr) || currentStr.length === 0) {
      return 0;
    }

    // Treat all letters as UpperCase and calculate the sum.
    return currentStr
      .toUpperCase()
      .split('')
      .reduce((sum, char) => sum + char.charCodeAt(0), 0);
  };

  const sum1 = calculateAsciiSum(s1);
  const sum2 = calculateAsciiSum(s2);

  return sum1 === sum2;
}
