function noBoringZeros(num) {
  if (num === 0) return 0;
  while (num % 10 === 0) {
    num = num / 10;
  }
  return num;
}
