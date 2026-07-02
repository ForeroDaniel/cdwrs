function battle(x, y) {
  a = x.split("").map(z => z.charCodeAt(0)-64).reduce((a,b) => a+b, 0)
  b = y.split("").map(z => z.charCodeAt(0)-64).reduce((a,b) => a+b, 0)
  return a < b ? y : a > b ? x : "Tie!"
}
