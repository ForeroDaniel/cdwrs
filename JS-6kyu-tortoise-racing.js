function race(v1, v2, g) {
  // If B is not faster than A, return null (or nothing)
  if (v1 >= v2) {
    return null; // This is what the test expects
  }

  // Calculate the time in hours (as a floating-point value)
  const timeInHours = g / (v2 - v1);

  // Convert hours to minutes
  const totalMinutes = timeInHours * 60;
  
  // Extract whole hours
  const hours = Math.floor(totalMinutes / 60);
  
  // Extract the remainder of minutes
  const minutes = Math.floor(totalMinutes % 60);
  
  // Calculate remaining seconds
  const seconds = Math.floor((totalMinutes % 1) * 60);

  return [hours, minutes, seconds];
}
