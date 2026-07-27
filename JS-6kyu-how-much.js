function howMuch(m, n) {
  const moneyMin = Math.min(m, n);
  const moneyMax = Math.max(m, n);
  const carAmnt = 9;
  const boatAmnt = 7;
  const results = [];
  
  for (let money = moneyMin; money <= moneyMax; money++) {
    const carCost = (money - 1) / carAmnt;
    const boatCost = (money - 2) / boatAmnt;
    
    if (Number.isSafeInteger(carCost) && Number.isSafeInteger(boatCost)) {
      results.push([`M: ${money}`, `B: ${boatCost}`, `C: ${carCost}`]);
    }
  }
  
  return results;
}
