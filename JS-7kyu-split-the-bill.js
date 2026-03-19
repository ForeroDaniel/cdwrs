const splitTheBill = x => {
  const avg = Object.values(x).reduce((r, e) => r + e, 0) / Object.values(x).length;
  for (let key in x) x[key] = +(x[key] - avg).toFixed(2);
  return x; 
}
