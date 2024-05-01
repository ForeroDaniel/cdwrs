function findNb(m) {
  let n, cubesSum = 0;
  for (let i = 1; cubesSum < m; ++i){
    cubesSum += i**3
    n = i;
  }
  return cubesSum === m ? n : (-1);
}
