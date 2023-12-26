function giveMeFive(obj){
  let resultingArray = [];
  for (let key in obj){
    if(key.length === 5) resultingArray.push(key);
    if(obj[key].length === 5) resultingArray.push(obj[key]);
  }
  return  resultingArray;
}
