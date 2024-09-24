function partsSums(ls) {
  const result = [];
  let totalSum = ls.reduce((acc, x) => acc + x, 0);

  for (let i = 0; i <= ls.length; i++) {
    result.push(totalSum);
    if (i < ls.length) {
      totalSum -= ls[i];
    }
  }
  
  return result;
}
