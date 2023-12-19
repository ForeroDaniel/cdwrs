function logicalCalc(array, op){
  switch(op){
      case 'AND': return array.every(x=>x===true);
      case 'OR': return array.some(x=>x===true);
      case 'XOR': return array.filter(x => x === true).length % 2 === 1;
  }
}
