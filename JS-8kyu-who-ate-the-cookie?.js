function cookie(x){
  let name = 'the dog';
  if (typeof x === 'string') {name = 'Zach'};
  if (typeof x === 'number') {name = 'Monica'};
  
  return `Who ate the last cookie? It was ${name}!`
}
