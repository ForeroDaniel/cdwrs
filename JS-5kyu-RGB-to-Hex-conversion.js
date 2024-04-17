function rgb(...args) {
  let result = '';
  for (let e of args){
    e = Math.max(0, Math.min(255, e));
    result = result.concat(e.toString(16).padStart(2, '0'));
  }
  return result.toUpperCase();
}
