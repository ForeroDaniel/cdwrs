function rot13(message){
  const charCode = Array.prototype.map.call(message, x => x.charCodeAt(0)).map(x => {
    if (x >= 65 && x <= 90) {
      return x > 77 ? x - 13 : x + 13;
    } else if (x >= 97 && x <= 122) {
      return x > 109 ? x - 13 : x + 13;
    } else {
      return x;
    }
  });
  return String.fromCharCode(...charCode);
}
