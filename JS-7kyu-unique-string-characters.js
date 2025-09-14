function solve(a, b) {
  let uncommonChars = [];

  // Check characters in 'a' that are not in 'b'
  for (let charA of a) {
    if (!b.includes(charA)) {
      uncommonChars.push(charA);
    }
  }

  // Check characters in 'b' that are not in 'a'
  for (let charB of b) {
    if (!a.includes(charB)) {
      uncommonChars.push(charB);
    }
  }

  return uncommonChars.join('');
}
