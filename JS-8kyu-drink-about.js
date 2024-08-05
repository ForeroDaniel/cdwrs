function peopleWithAgeDrink(old) {
  return 'drink '.concat( 
    old < 14 ? "toddy" : 
    old < 18 ? "coke" : 
    old < 21 ? "beer" : 
    "whisky" 
  )
};
