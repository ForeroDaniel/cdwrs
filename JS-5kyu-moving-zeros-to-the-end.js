function moveZeros(arr) {
  return arr.filter(e => e !== 0).concat(arr.filter(e => e === 0));
}
