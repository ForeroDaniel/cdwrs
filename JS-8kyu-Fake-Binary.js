function fakeBin(x){
  let belowFive = [0,1,2,3,4];
  return x.split('').map((element) => {return belowFive.includes(+element) ? 0 : 1}).join('');
}
