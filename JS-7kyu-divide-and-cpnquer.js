function divCon(x) {
  const sumOfType = (type) => x
    .filter(item => typeof(item) === type)
    .reduce((acc, item) => acc + (type === 'string' ? parseInt(item) : item), 0);

  const stringsSum = sumOfType('string');
  const numbersSum = sumOfType('number');
  
  return numbersSum - stringsSum;
}
