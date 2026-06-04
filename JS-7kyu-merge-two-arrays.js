function mergeArrays(a, b) {
  let j = [],
      longest = a.length > b.length ? a:b;
  for (var i=0; i<longest.length; i++){
    if (a[i]) j.push(a[i])
    if (b[i]) j.push(b[i])
  }
  return j
}
