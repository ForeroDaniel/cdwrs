function infected(s) {
  const total = s.replace(/X/g, '').length;
  const infected = s.split('X').filter(i => i.includes(1)).join('').length;
  const percentage = 100*infected/total
  return percentage || 0;
}
