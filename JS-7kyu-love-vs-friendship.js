function wordsToMarks(s){
  return s.split('')
          .map(char => char.codePointAt(0) - 96)
          .reduce((acc, x)=> acc + x, 0)
}
