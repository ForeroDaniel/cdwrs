function findNeedle(haystack) {
  const position = haystack.findIndex(element => element === 'needle');
  return `found the needle at position ${position}`;
}
