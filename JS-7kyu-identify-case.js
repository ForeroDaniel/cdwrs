function id(str) {
  if(/^[a-z]+-[a-z]+(-[a-z]+)*$/.test(str)) return 'kebab';
  else if(/^[a-z]+[A-Z][a-z]*([A-Z][a-z]*)*$/.test(str)) return 'camel';
  else if(/^[a-z]+_[a-z]+(_[a-z]+)*$/.test(str)) return 'snake';
  return 'none';
}
