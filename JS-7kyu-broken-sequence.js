function findMissingNumber(sequence){
  if (!Number.isInteger(+sequence.split(' ').join(''))) return 1;
  var arr = sequence.split(' ').map(n => +n);
  for (i = 1; i < Math.max(...arr); i++) {
    if (!arr.includes(i)) return i;
  }
  return 0;
}
