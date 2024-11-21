function ipsBetween(start, end){
  const num = ip => ip.split('.')
                      .map(x => parseInt(x))
                      .reduce((acc, e) => acc * 256 + e);  
  
  return num(end) - num(start);
}
