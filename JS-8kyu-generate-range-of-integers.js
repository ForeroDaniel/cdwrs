function generateRange(min, max, step){
  const result = [];
  for(let i = min; i <= max; i = i + step) result.push(i);
  return result;
}
