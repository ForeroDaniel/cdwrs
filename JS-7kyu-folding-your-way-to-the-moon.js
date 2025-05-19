function foldTo(distance) {
  if(distance < 0 ) return null;
  
  const initialThickness = 0.0001;
  let thickness = initialThickness;
  let folds = 0;
  
  while (thickness < distance) {
    thickness *= 2;
    folds++;
  }
  
  return folds;
}
