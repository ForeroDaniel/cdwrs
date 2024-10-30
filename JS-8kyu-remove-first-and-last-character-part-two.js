function array(string) {
  const result = string.split(',').slice(1, -1).join(' ');
  return result || null;
}
