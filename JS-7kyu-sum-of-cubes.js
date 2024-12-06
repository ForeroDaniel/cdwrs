function sumCubes(n){
  return Array
              .from({ length: n }, (_, index) => index + 1)
              .map(x => x ** 3)
              .reduce((x, acc) => x + acc, 0);
}
