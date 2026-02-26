function makePassword(phrase) {
  const charMap = { i: '1', o: '0', s: '5' };

  return phrase.split(' ')
               .map((word) => word[0])
               .join('')
               .replace(/[ios]/gi, (match) => charMap[match.toLowerCase()]);
}
