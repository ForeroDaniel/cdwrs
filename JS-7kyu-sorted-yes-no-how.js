function isSortedAndHow(array) {
  const isAscending = array.every((value, i, arr) => i === 0 || arr[i] >= arr[i - 1]);
  const isDescending = array.every((value, i, arr) => i === 0 || arr[i] <= arr[i - 1]);

  if (isAscending) return "yes, ascending";
  else if (isDescending) return "yes, descending";
  else return "no";
}
