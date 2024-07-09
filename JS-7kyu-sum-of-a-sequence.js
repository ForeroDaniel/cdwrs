const sequenceSum = (begin, end, step) => {
  if (begin > end) return 0;
  let result = [];
  for (let i = begin; i <= end; i += step) result.push(i);
  return result.reduce((acc, e) => acc + e, 0)
};
