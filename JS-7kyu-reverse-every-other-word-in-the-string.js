function reverse(str) {
  // Trim leading/trailing whitespaces and split the string into words
  const words = str.trim().split(/\s+/);
  
  // Reverse every other word (starting from index 1)
  for (let i = 1; i < words.length; i += 2) {
    words[i] = words[i].split('').reverse().join('');
  }
  
  // Join the words back into a string with a single space between them
  return words.join(' ');
}
