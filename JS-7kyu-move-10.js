function moveTen(s) {
  return s.split('').map(char => {
    return String.fromCharCode(((char.charCodeAt(0) - 97 + 10) % 26) + 97);
  }).join('');
}
