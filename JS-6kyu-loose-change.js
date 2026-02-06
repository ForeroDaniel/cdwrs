const looseChange = (cents) => (
  cents = Math.max(cents, 0),
  {
    Quarters: cents / 25 | 0,
    Dimes: cents % 25 / 10 | 0,
    Nickels: cents % 25 % 10 / 5 | 0,
    Pennies: cents % 5 | 0
})
