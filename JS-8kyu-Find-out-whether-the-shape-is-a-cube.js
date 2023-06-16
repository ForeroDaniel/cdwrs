var cubeChecker = function(volume, side){
  return Math.cbrt(volume) === side && volume>0 && side>0
};
