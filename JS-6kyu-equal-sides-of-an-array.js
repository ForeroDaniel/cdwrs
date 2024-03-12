function findEvenIndex(arr) {
  const totalSum = arr.reduce((acc, e) => acc + e, 0);
  
  let leftSum = 0;
  
  for (let i = 0; i < arr.length; ++i) {
    let rightSum = totalSum - leftSum - arr[i];
    
    if (rightSum === leftSum) return i;
    
    leftSum += arr[i];
  }
  
  return -1;
}
