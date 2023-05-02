function quadrant(x, y) {
  let cuadrantPoint;
    if (x>0 && y>0)
    cuadrantPoint = 1;
    else if (x<0 && y>0)
    cuadrantPoint = 2;
    else if (x<0 && y<0)
    cuadrantPoint = 3;
    else if (x>0 && y<0)
    cuadrantPoint = 4;
  
  return cuadrantPoint;
}
