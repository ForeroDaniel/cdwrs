function gordon(a){
  return a
          .split(' ')
          .join('!!!! ')
          .toUpperCase()
          .replace(/[aeiou]/gi, match => match === 'A' ? '@' : '*')
          .concat('!!!!')
}
