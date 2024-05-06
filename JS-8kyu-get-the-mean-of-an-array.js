function getAverage(marks){
  return Math.floor(marks.reduce((acc, x)=> acc + x, 0) / marks.length);
}
