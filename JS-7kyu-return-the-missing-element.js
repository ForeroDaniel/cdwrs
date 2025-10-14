function getMissingElement(superImportantArray){
  const n = 9;
  const expectedSum = n * (n + 1) / 2;
  const actualSum = superImportantArray.reduce((sum, num) => sum + num, 0);
  return expectedSum - actualSum;
}
