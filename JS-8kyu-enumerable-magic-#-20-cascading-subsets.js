function eachCons(array, n) {
  let result = [];
	if(n === 0 || array.length < n) return result;
  for(let i = 0; i <= array.length - n; ++i) {result.push(array.slice(i, i+n))};
  return result;  
}
