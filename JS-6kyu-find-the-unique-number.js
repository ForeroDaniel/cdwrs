function findUniq(arr) {
  return arr.find( (e, i, a) => a.indexOf(e) === a.lastIndexOf(e) )
}
