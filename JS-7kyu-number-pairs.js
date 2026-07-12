function getLargerNumbers(a, b) {

  var newArray = [];
  
  for ( i=0; i<a.length; i++) {
    newArray.push( Math.max( a[i], b[i] ) );
  }
  
  return newArray;
}
