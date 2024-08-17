function declareWinner(fighter1, fighter2, firstAttacker) {
  let attacker = fighter1.name === firstAttacker ? fighter1 : fighter2;
  let defender = attacker === fighter1 ? fighter2 : fighter1;

  while (attacker.health > 0 && defender.health > 0) {
    defender.health -= attacker.damagePerAttack;
    // Swap attacker and defender for the next round
    [attacker, defender] = [defender, attacker];
  }

  // Check the health of both fighters and return the winner
  if (fighter1.health > 0) {
    return fighter1.name;
  } else {
    return fighter2.name;
  }
}
