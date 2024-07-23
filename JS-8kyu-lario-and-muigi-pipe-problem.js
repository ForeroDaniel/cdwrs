function pipeFix(numbers){
  const result = []
  for (let i = Math.min(...numbers); i <= Math.max(...numbers); ++i) result.push(i);
  return result
}
