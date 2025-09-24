var translation = { A : '@',  B : '8',  C : '(',  E : '3', G : '6', H : '#',  I : '!',  L : '1',  O : '0',  S : '$',  T : '7',  Z : '2'
}

function toLeetSpeak(str) {
  return str.split('').map( c => translation[c] || c).join('');
}
