function squareDigits(num){
  return parseInt(num.toString().split('').map(n => Math.pow(parseInt(n), 2)).join(''));
}
