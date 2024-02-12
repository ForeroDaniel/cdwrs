function XO(str) {
  const counter = {};
  str.toLowerCase().split('').forEach(char => {
    if (char === 'x' || char === 'o') counter[char] = (counter[char] || 0) + 1;
  })
  return counter['x'] === counter['o']; 
}
