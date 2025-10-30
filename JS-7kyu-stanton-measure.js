function stantonMeasure(a){
  const n = a.filter(num => num === 1).length;
  return a.filter(num => num === n).length;
}
