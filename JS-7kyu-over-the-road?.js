function overTheRoad(address, n){
  // If the address is odd (left side), opposite house will be even (right side)
  if (address % 2 !== 0) return 2 * n - (address - 1);

  // If the address is even (right side), opposite house will be odd (left side)
  else return 2 * n - address + 1;
}
