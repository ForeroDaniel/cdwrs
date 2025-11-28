function getStrings(city){
  const s = city.toLowerCase().replace(/[^a-z]/g, '');
  return [...new Set(s)].map(c => `${c}:${'*'.repeat(s.split(c).length - 1)}`).join(',');
}
