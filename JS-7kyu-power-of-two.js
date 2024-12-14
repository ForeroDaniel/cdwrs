function isPowerOfTwo(n){
  while (n > 1) n = n / 2;
  return n === 1; 
}
