function howManySmaller(arr,n){
  let smallerThanN = 0;
  arr.map(x=>x.toFixed(2)).map(x=>{if(x<n)++smallerThanN});
  return smallerThanN;
}
