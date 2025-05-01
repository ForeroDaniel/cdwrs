function incrementer(nums) { 
  return nums.map((value, index) => (value + index + 1) % 10)
}
