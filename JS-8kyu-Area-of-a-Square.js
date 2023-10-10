function squareArea(A){
  // Circumference = 2 * π * radius
  // rearrange the formula to solve for the radius:
  // Radius = Circumference / (2 * π)
  
  // circumference / (2 * π) : this is equivalent to one side of the square & to the power of 2 it is equivalent to the area of the square
   return ((A * 4) / (2 * Math.PI))**2
}
