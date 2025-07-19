function decomp(n) {
  
  let factors = {};  

  for (let i = 2; i <= n; i++) {
    for (let j = i, k = 2; j > 1; k++) {
      while (j % k === 0) {
        factors[k] = factors[k] || 0;
        factors[k]++;
        j = j / k;
      }
    }
  }

  let res = [];

  for (let prime in factors)
    res.push(factors[prime] > 1 ? prime + '^' + factors[prime] : prime); 

  return res.join(' * ');

}
