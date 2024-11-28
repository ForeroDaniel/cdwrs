function pickIt(arr){
  let odd=[],even=[];
  for (let i = 0; i < arr.length; i++){
    arr[i] % 2 === 1 ? odd.push(arr[i]) : even.push(arr[i]);
  }
  return [odd,even];
}
