const prevMultOfThree = n => {
  while(n % 3 != 0) {
    n = Math.floor(n/10);
    if (n < 1) return null;
  }
  return n;
}
