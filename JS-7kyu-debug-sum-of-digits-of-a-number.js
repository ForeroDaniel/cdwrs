function getSumOfDigits(integer) {
  var sum = 0;
  var digits = Math.abs(integer).toString(); 
  for (var ix = 0; ix < digits.length; ix++) {
    sum += parseInt(digits[ix], 10);
  }
  return sum;
}
