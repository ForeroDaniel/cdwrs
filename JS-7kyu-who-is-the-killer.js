function killer(suspectInfo, dead) {
  return Object.keys(suspectInfo).find(suspectName => {
    const seenPeople = suspectInfo[suspectName];
    
    return dead.every(victim => seenPeople.includes(victim));
  });
}
