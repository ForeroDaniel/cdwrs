function squares(x, n) {
  if (n < 1) return [];
  
  const result = [x]
  
  // Add squares of previous number n-1 times
  for (let i = 1; i < n; i++) {
      result.push(result[i - 1] * result[i - 1]);
  }

  return result;
  
}
