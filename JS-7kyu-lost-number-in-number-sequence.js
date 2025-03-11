function findDeletedNumber(arr, mixArr) {
  let originalSum = 0;
  let mixedSum = 0;
  
  for (let num of arr) originalSum += num;
  for (let num of mixArr) mixedSum += num;
  
  return originalSum - mixedSum;
}
