function myLanguages(obj) {
  return Object.entries(obj)
               .sort(([, a], [, b]) => b - a)
               .filter(x => x[1] >= 60)
               .map(x => x[0])
}
