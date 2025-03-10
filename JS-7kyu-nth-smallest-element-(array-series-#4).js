function nthSmallest(arr, pos){
  return arr.sort((a, b) => a - b).at(pos - 1)
}
