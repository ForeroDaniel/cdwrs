function seqToOne(n){
  return [...Array(Math.abs(n-1)+1)].map((_,i) => n<1?n+i:n-i);
}
