function arrayPlusArray(arr1, arr2) {
  return arr1.reduce((accumulator, currentValue) => accumulator + currentValue) + arr2.reduce((accumulator, currentValue) => accumulator + currentValue);
}
