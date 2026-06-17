device.decode = function (w) {
  for (j = 0; j < 65; j++){
    w = device.encode (w)
  }
  return w; 
}
