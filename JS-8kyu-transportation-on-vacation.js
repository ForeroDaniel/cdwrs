function rentalCarCost(d) {
  let total = 40 * d;
  return d >= 7 ? total -= 50 : d >= 3 ? total -= 20 : total;
}
