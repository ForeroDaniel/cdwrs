function cleanString(s) {
  const stack = [];
    
  for (let char of s) {
    if (char === '#') stack.pop();
    else stack.push(char);
  }

  return stack.join(''); // Join the stack into a final string
}
