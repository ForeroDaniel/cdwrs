function isDivisible(n, ...rest){
  return rest.every(divisor => n % divisor === 0)
}
