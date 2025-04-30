function explode(s) {
  return s.split('')
          .map( x => x.repeat( parseInt(x) ) )
          .join('')
}
