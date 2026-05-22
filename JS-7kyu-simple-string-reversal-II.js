function solve(s,a,b) {
  return s.slice(0,a) + [...s.slice(a,b+1)].reverse().join`` + s.slice(b+1)
}
