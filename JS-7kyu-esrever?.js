reverse = function(array) {
  const arrayTwo = [];
  while(array.length > 0) arrayTwo.push( array.pop() );
  return arrayTwo;
}
