function persistence(num) {
  let count = 0;
  while (num > 9) {
    num = num
              .toString()
              .split('')
              .reduce((acc,e)=>{return acc * parseInt(e)}, 1)
    count += 1;
  }
  return count
}
