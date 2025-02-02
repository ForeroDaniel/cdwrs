function sortMyString(S) {
  let first = '', second = '';
  for (let i = 0; i < S.length; i++) {
    if (i % 2 === 0) first += S[i];
    else second += S[i];
  }
  return `${first} ${second}`;
}
