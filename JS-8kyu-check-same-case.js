function sameCase(a, b){
  if (       typeof a !== 'string'
                       || 
             typeof b !== 'string' 
                       ||
      a.toLowerCase() === a.toUpperCase()
                       ||
      b.toLowerCase() === b.toUpperCase()  )
      return -1;
  if (a === a.toLowerCase() &&  b === b.toLowerCase()
                            ||
      a === a.toUpperCase() &&  b === b.toUpperCase())
      return 1;
  else
      return 0;
  
}
