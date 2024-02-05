function findOutlier(integers){
  const even =  [];
  const odd = [];
  for (let i of integers) {
    i % 2 === 0 ? even.push(i) : odd.push(i);
  }
  return even.length === 1 ? even[0] : odd [0]; 
}
