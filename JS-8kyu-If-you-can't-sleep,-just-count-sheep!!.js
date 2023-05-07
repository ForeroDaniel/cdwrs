var countSheep = function (num){
  let result = '';
  for (let i = 1; num > 0 && i <= num; i++) result = result.concat(`${i} sheep...`);  
  return result
}
