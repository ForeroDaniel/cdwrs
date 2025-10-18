function bandNameGenerator(s) {
  return s[0] === s[s.length - 1] ? 
  `${s[0].toUpperCase()}${s.slice(1, -1)}${s}` :
  `The ${s[0].toUpperCase()}${s.slice(1)}`;
}
