function nbDig(n, d) {
  let count = 0;
  for (let i = 0; i <= n; i++) {
    const square = (i * i).toString();
    count += square.split(d).length - 1;
  }
  return count;
}
