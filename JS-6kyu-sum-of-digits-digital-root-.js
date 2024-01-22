function digitalRoot(n) {
  while (n > 9) {
   n = n.toString().split('').reduce((acc,num)=> acc + parseInt(num), 0);
  }
  return n;
}
