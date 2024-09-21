function arrayMadness(a, b) {
  
  return a.reduce((acc, x) => acc + x**2, 0) > b.reduce((acc, x) => acc + x**3, 0)
}
