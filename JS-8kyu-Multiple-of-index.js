function multipleOfIndex(array) {
  let result = []; 
  if (array[0] === 0) result.push(0);
  for (let i = 0; i < array.length; ++i) {if (array[i] % i === 0) result.push(array[i])};
  return result;
}
