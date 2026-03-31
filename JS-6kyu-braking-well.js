function dist(v, mu) {
  v = v * 10 / 36;
  return v + (v * v) / (2 * mu * 9.81);
}

function speed(d, mu) {
  let x = 2 * mu * 9.81;
  return (-x + Math.sqrt(x * x + 4 * d * x)) * 36 / 20;
}
