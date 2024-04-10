function oddOrEven(array) {
   return array.reduce( (acc, e) => acc + e, 0 ) % 2 === 0 ? 'even' : 'odd' ;
}
