function consonantCount(str) {
  const regex = /[b-df-hj-np-tv-z]/gi;
  const matches = str.match(regex);
  const count = matches ? matches.length : 0;
  return count
}
