function cubeOdd(arr) {
  if (arr.some(el => typeof el !== 'number')) return undefined;

  return arr
            .filter(cubed => cubed % 2 !== 0) 
            .reduce((sum, num) => sum + num**3, 0); 
};
