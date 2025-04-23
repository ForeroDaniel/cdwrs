function beeramid(bonus, price) {
  if (bonus < price) return 0; // Not enough money for even one can

  let level = 0;
  let totalCost = 0;

  while (true) {
    level++;
    const cans = level * level;
    const cost = cans * price;
    totalCost += cost;

    if (totalCost > bonus) {
      return level - 1; // Return the previous level
    }

    if (totalCost === bonus) {
      return level; // Exact match
    }
  }
}
