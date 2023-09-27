function findAverage(array) {
  return array.length !== 0 ? array.reduce((acc,x)=>acc+x)/array.length : 0;
}
