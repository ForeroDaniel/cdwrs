function balance(left,right){
  function count(x) {
    return x.split('').reduce( (acc, x) => { return x === '!' ? acc += 2 : acc += 3 }, 0 )
  }

  return count(right) > count(left) ? 'Right' : count(right) < count(left) ? 'Left' : 'Balance' ;
}
