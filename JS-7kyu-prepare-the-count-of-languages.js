function countLanguages(list) {
  const result = {};
  for (let dev of list) dev.language in result ? result[dev.language] += 1 : result[dev.language] = 1;
  return result
}
