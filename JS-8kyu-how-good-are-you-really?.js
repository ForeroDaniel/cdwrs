function betterThanAverage(classPoints, yourPoints) {
  return classPoints.reduce((acc, e) => acc + e, 0) / classPoints.length < yourPoints;
}
