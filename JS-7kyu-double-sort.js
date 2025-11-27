function dbSort(arr){
  const numbers = arr.filter(item => typeof item === 'number');
  const strings = arr.filter(item => typeof item === 'string');
  
  numbers.sort((a, b) => a - b);
  
  strings.sort();
  
  return numbers.concat(strings);
}
