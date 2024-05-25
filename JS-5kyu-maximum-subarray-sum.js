var maxSequence = function(arr) {
  let maxEndingHere = 0;
  let maxSoFar = 0;

  for (let i = 0; i < arr.length; i++) {
    maxEndingHere = Math.max(0, maxEndingHere + arr[i]);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }

  return maxSoFar;
};
