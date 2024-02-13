function duplicateEncode(word){
  const count = {};
  const wordArray = word.toLowerCase().split('');
  wordArray.forEach( e => count[e] = (count[e] || 0) + 1 )
  wordArray.forEach( (e, index) => { wordArray[index] = count[e] === 1 ? '(' : ')' })
  return wordArray.join('');
}
