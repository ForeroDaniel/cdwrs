function countSheeps(sheep) {
  let count = 0;
  for (let i of sheep){
    if (i) count += 1;
  }
  return count
}
