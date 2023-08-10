function drawStairs(n) {
  let result = '';
  for (let i = 1; i < n; ++i){
     result = result.concat('I\n' + ' '.repeat(i))
  }
  return result.concat('I');
}
