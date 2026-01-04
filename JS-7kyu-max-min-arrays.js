function solve(arr) {
  arr.sort((a, b) => a - b);
  const result = [];
  
  while (arr.length > 0) {
    result.push(arr.pop()); // Takes the last element (Max)
    if (arr.length > 0) {
      result.push(arr.shift()); // Takes the first element (Min)
    }
  }
  
  return result;
}
