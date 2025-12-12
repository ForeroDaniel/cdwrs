function flyBy(lamps, drone){
  let result = '';
  
  for (let i = 0; i < lamps.length; i++) {
    // If the current lamp index is within the drone's path (drone.length)
    if (i < drone.length) {
      result += 'o';
    } else {
      result += 'x';
    }
  }
  
  return result;
}
