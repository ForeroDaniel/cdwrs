function digits(num){
  let res = [];
  String(num).split('').forEach((d,i,arr) => {
    for(let j=i+1;j<arr.length;j++)
      res.push(Number(d)+Number(arr[j]));
  });
  return res;
}
