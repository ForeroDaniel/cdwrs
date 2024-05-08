function expandedForm(num) {
  return num
  .toString()
  .split('')
  .map((x, index, arr) => x + '0'.repeat(arr.length - index - 1))
  .filter(num => Number(num) != 0)
  .join(' + ')
  ;
}
