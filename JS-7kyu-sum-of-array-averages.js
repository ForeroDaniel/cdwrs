function sumAverage(arr) {
  return arr.map(a => a.average()).sum();
}

Array.prototype.sum = function(){
  return this.reduce((c,p)=>c+p);
}

Array.prototype.average = function(){
  return this.sum() / this.length;
}
