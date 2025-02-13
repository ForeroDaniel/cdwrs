function maxDiff(list) {
  if(list.length < 2) return 0
  return Math.max(...list) - Math.min(...list)
};
