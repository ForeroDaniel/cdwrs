function findDup( arr ){
  return arr.find((number, index, array) => number === array[index + 1])
}
