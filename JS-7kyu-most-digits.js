function findLongest(array){
  let maxDigits = 0;
  let result;

  for (let number of array) {
      const digitCount = number.toString().length;

      if (digitCount > maxDigits) {
          maxDigits = digitCount;
          result = number;
      }
  }

  return result;
}
