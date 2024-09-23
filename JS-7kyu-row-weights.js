function rowWeights(array){
  let result = [0, 0];
  array.forEach((x, i) => {return i % 2 === 0 ? result[0] += x : result[1] += x;})
  return result;
}
