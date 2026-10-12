function moreZeros(s){
  let arrCodePoints = s.split('').map(c => c.charCodeAt(0)).map(n => n.toString(2));
  let chars = arrCodePoints.filter(s => s.split('0').length > s.split('1').length).map(s => parseInt(s, 2));
  let uniq = new Set(chars);
  return String.fromCharCode(...Array.from(uniq)).split('')
}
