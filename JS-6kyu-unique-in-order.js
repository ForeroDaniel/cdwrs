var uniqueInOrder=function(i){
  if (typeof i === 'string') i = i.split('');
  return i.filter( (x, i, a) => x !== a[--i] )
}
