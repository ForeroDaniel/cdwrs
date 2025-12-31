function findLineup(distances) {
  let returnArray = new Array(distances.length);
  distances.forEach((distance, index) => {
    returnArray[distance] = index + 1;
  });
  return Object.keys(returnArray).length !== returnArray.length ? [] : returnArray;
}
