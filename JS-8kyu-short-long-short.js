function solution(a, b){
  const arr = [a, b];
  arr.sort((x, y) => x.length - y.length)
  return arr[0] + arr[1] + arr[0];
}
