function consecutive(arr) {
  if (arr.length < 2) return 0;
  
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  
  return (max - min + 1) - arr.length;
}
