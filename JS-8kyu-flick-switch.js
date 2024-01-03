function flickSwitch(arr){
  
  const result = [];
  
  let flickFound = true;
  
  arr.forEach(x=>{
    if (x === 'flick') flickFound = !flickFound; // Toggle the boolean value
    result.push(flickFound);
  })

  return result;
}
