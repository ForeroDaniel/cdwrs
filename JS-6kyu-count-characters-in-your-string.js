function count(string) {
  const count = {};
  string.split('').forEach(x => count[x] ? ++count[x] : count[x] = 1)
  return count;
}
