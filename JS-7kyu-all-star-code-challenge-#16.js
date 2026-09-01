function noRepeat(str) {  
  for(var i of str) if(str.split(i).length == 2) return i
}
