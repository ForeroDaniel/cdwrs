var palindromeChainLength = function(n) {
  let count = 0;
  
  function reverse(x){ return +x.toString().split('').reverse().join('') }
  
  while(n !== reverse(n)){
    n += reverse(n)
    ++count
  }
  
  
  return count
};
