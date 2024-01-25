function highAndLow(n){
  n = n.split(' ').sort((a, b) => a - b);
  return `${n[n.length-1]} ${n[0]}`
}
