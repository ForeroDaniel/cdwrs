function goodVsEvil(good, evil){
  const goodValue = [1, 2, 3, 3, 4, 10];
  
  const evilValue = [1, 2, 2, 2, 3, 5, 10];
  
  good = good.split(' ').map(Number);
  
  evil = evil.split(' ').map(Number);
  
  function finalValue(teamValues, team){
    return teamValues
           .map((x, i) => x * team[i])
           .reduce((acc, x) => acc + x);
  } 
  
  const goodTotal = finalValue(goodValue, good);
  const evilTotal = finalValue(evilValue, evil);
  
  console.log(goodTotal, evilTotal)
  
  if (evilTotal > goodTotal) return "Battle Result: Evil eradicates all trace of Good";
  else if (goodTotal > evilTotal) return "Battle Result: Good triumphs over Evil";
  else return "Battle Result: No victor on this battle field"
  
}
