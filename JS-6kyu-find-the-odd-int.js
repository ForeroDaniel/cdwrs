function findOdd(arr) {
  
  const numberCount = {};
  
  arr.forEach(e => {
    return numberCount[e] = (numberCount[e] || 0) + 1; 
  })
  
  for (let e in numberCount) {
    if (numberCount[e] % 2 !== 0 ) {
      let result = parseInt(e);
      return result;
    }
  }
}
