function isNice(arr){
  return arr.length > 0 && arr.every(n => arr.includes(n - 1) || arr.includes(n + 1));
}
