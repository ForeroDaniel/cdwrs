function getCount(str) {
  const vowelRegex = /[aeiou]/gi;
  return str.split('').filter(char => char.match(vowelRegex)).length;
}
