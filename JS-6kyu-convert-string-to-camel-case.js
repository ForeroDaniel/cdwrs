function toCamelCase(str){
  if (str === '') return str;
  return str.split(/[ _-]/).map( (e, i) => i > 0 ? e[0].toUpperCase() + e.slice(1) : e ).join('')
}
