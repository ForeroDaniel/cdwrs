function digPow(n, p){
  const nToArray = n.toString().split('');
  let k = 0;
  for ( let i of nToArray ) {
    k += i**p / n;
    p += 1;
  }
  return Number.isInteger(k) ? k : -1;
}
