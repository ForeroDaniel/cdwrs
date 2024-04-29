//return the total number of smiling faces in the array
function countSmileys(arr) {
  return arr.filter(x => x.match(/^[:;][-~]?[)D]$/)).length
}
