function findMissing(arr1, arr2) {
   const reducer = (accumulator, currentValue) => accumulator + currentValue
return arr1.reduce(reducer, 0) - arr2.reduce(reducer, 0);
}
