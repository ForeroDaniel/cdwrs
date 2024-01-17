function solution(number){
  let result = 0;
  
  if (number >= 0) {
    
  function generateMultiples(factor, limit) {
      const multiples = [];
      for (let i = factor; i < limit; i += factor) {multiples.push(i)};
      return multiples;
    }
  
  const multiplesOfThree = generateMultiples(3, number);
  const multiplesOfFive = generateMultiples(5, number);
  
  result = [...new Set([...multiplesOfThree, ...multiplesOfFive])].reduce((acc, current) => acc + current, 0)
  
  };
  
  return result;
}
