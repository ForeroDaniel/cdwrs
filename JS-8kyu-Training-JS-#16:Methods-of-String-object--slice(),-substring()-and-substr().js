function cutIt(arr){
  let length = arr.reduce((accumulator,element) => Math.min(accumulator,element.length), arr[0].length);
  return arr.map(x => x.slice(0, length));
}
