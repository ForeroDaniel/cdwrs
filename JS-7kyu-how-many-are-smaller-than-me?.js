
function smaller(nums) {
return nums.map((num, i) => {
    // For each number, slice the array to get all elements to its right.
    // Then, filter those elements to count how many are smaller than the current number.
    // The length of the filtered array is the desired count.
    return nums.slice(i + 1).filter(v => v < num).length;
  });
}
