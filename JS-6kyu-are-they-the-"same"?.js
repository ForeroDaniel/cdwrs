function comp(a, b){
  if (!a || !b) return false;
  a.sort((x, y) => x - y);
  b.sort((x, y) => x - y);
  return a.every((num, index) => num * num === b[index]);
}
