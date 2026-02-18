function rectangleRotation(a, b) {
  let x = Math.floor(a / Math.sqrt(2));
  let y = Math.floor(b / Math.sqrt(2));
  let r = (x + 1) * (y + 1) + x * y;
  return r + r % 2 - 1;
}
