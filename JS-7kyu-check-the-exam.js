function checkExam(array1, array2) {
  let score = 0;
  for (let i = 0; i < array1.length; ++i){
    
    if(array1[i] === '' || array2[i] === '') continue;
    else if(array1[i] === array2[i]) score = score + 4;
    else score = score - 1
  }
  return score < 0 ? 0 : score;
}
