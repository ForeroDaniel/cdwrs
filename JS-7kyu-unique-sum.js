function uniqueSum(lst) {
  if (lst.length === 0) return null;
  return [...new Set(lst)].reduce((sum, num) => sum + num, 0);
}
