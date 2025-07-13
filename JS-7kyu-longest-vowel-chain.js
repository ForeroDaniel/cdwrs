function solve(s){
 const regex = /[aeiou]+/gi;
 const matches = s.match(regex);
 const maxLength = matches.reduce((max, s) => Math.max(max, s.length), 0); 
 return maxLength
}
