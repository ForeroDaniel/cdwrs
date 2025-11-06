//preload variable: dict

var makeBackronym = function(string){
  return string
    .toUpperCase()
    .split('')
    .map(letter => dict[letter])
    .join(' ');
};
