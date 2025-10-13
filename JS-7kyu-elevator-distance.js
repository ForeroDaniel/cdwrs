function elevatorDistance(floors) {
  let totalDistance = 0;
  for (let i = 1; i < floors.length; i++) {
    let distance = Math.abs(floors[i] - floors[i - 1]);
    
    totalDistance += distance;
  }
  return totalDistance;
}
