function sqInRect(length, width) {
  if (length === width) return null;
  
  const squares = [];
  let remaining = Math.max(length, width);
  
  while (length > 0 && width > 0) {
    squares.push(length > width ? width : length);
    if (length > width) {
      length -= width;
    } else {
      width -= length;
    }
  }
  
  return squares;
}
