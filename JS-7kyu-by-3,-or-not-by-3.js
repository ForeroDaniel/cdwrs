function divisibleByThree(str){
  let sum = 0;

  // Step 1: Sum all the digits in the initial string.
  for (let i = 0; i < str.length; i++) {
    sum += Number(str[i]);
  }

  // Step 2: Keep summing the digits of the result until the sum is a single-digit number (less than 10).
  while (sum > 9) {
    let newSum = 0;
    let sumAsString = String(sum);
    for (let i = 0; i < sumAsString.length; i++) {
      newSum += Number(sumAsString[i]);
    }
    sum = newSum;
  }

  // Step 3: Check if the final single-digit sum is a multiple of 3.
  // The only single-digit multiples of 3 are 0, 3, 6, and 9.
  return sum === 0 || sum === 3 || sum === 6 || sum === 9;
}
