function solve(str){
  // Initialize counts for [uppercase, lowercase, numbers, specials]
  const counts = [0, 0, 0, 0];
  
  for (const char of str) {
    if (/[A-Z]/.test(char)) {
      counts[0]++;
    } else if (/[a-z]/.test(char)) {
      counts[1]++;
    } else if (/\d/.test(char)) {
      counts[2]++;
    } else {
      counts[3]++;
    }
  }
  
  return counts;
}
