function longestWord(str){
  return str.split(' ').sort((b, a) => b.length - a.length).pop();
}
