const computeDepth = (n) => {
  let digits = new Set();
  let depth = 1;
  while (digits.size < 10) {
    let num = depth * n;
    
    while (num > 0) {
      digits.add(num % 10);
      num = Math.floor(num / 10);
    }
    
    depth++;
  }
  return depth - 1;
}
