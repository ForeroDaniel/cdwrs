function solution(digits){
  let maxSequence = 0;
    
  for (let i = 0; i < digits.length - 4; i++) {
      let sequence = parseInt(digits.substr(i, 5));
      maxSequence = Math.max(maxSequence, sequence);
  }

  return maxSequence;
}
