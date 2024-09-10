function capitalize(s){
  const sArray = Array.from(s);
  return [
    sArray.map(function(x, i){return i % 2 === 0? x.toUpperCase(): x}).join(''),
    sArray.map(function(x, i){return i % 2 !== 0? x.toUpperCase(): x}).join('')
  ];
};
