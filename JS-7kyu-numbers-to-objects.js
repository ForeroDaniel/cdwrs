function numObj(s){
  return s.map(n => {
    return { [n]: String.fromCharCode(n) };
  });
}
