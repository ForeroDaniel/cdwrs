function wave(str){
  const result = [];
  
  for (let i = 0; i < str.length; ++i){
    result[i] = str.split('').map((x, idx) => idx === i ? x.toUpperCase() : x).join('');
  }
  return result.filter(x => x !== x.toLowerCase());
}
