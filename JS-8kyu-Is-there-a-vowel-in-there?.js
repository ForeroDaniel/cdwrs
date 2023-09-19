function isVow(a){
  return a.map(x => {
    switch (x) {
        case 97: return 'a';
        case 101: return 'e';
        case 105: return 'i';
        case 111: return 'o';
        case 117: return 'u';
        default : return x;
    }
  })
}
