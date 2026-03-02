function nthChar(words){
  if (words.length === 0) return '';
  return words.map((word, index) => word[index]).join('')
}
