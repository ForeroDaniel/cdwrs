function narcissistic(value) {
  const Arr = value.toString().split('')
  return Arr.reduce((acc, x) => acc + parseInt(x)**Arr.length, 0) === value;
}
