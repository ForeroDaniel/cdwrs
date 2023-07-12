function correctPolishLetters (string) {
  const polish = ['ą','ć','ę','ł','ń','ó','ś','ź','ż']
  const roman  = ['a','c','e','l','n','o','s','z','z']
  let polishToRoman = [];
  
  for (let i = 0; i < string.length; ++i) polish.includes(string[i])  ? polishToRoman[i] = roman[polish.indexOf(string[i])]: polishToRoman[i] = string[i];
  return polishToRoman.join('');
}
