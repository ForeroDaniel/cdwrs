function firstNonConsecutive (arr) {
  let result = arr.find( (element,index,array) => element > ++array[index-1]);
  return Number.isInteger(result) ? result : null;
}
