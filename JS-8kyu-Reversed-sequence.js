const reverseSeq = n => {
  let integerArray = [n];
  while (1 < n) integerArray.push(n -= 1)
  return integerArray
};
