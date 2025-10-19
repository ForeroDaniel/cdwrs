function getRootProperty(d, v) {
  if (Array.isArray(d)) return d.includes(v);
  for (let x in d) if (getRootProperty(d[x], v)) return x;
  return null;
}
