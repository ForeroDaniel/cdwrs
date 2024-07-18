function shortcut(str) {
  return str.split('').filter(x => !x.match(/[aeiou]/gi)).join('');
}
