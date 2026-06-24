function doubleEveryOther(a) {
  for(let i = 1; i < a.length; i += 2) {
    a[i] *= 2;
  }
  return a;
}
