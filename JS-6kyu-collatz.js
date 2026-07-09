function collatz(n){
  if(n===1) return "1";
  return n + "->" + collatz(n%2===0?n/2:3*n+1)
}
