function maxMultiple(divisor, bound){
  let n = bound;
  while (n % divisor !== 0) --n;
  return n;
}
