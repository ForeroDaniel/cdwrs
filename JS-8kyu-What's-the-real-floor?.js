function getRealFloor(n) {
  return n > 0 && n < 13 ? n - 1 : n > 13 ? n - 2 : n ;
}
