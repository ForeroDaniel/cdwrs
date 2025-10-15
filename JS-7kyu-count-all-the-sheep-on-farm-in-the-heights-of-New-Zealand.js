function lostSheep(friday,saturday,total){
  // Sum the sheep that returned on Friday and Saturday.
  const returnedSheep = friday.reduce((sum, count) => sum + count, 0) + saturday.reduce((sum, count) => sum + count, 0);
  
  // Subtract the returned sheep from the total to find the lost sheep.
  return total - returnedSheep;
}
