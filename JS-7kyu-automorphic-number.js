function automorphic(num) {
  const square = num * num;
  
  const numStr = num.toString();
  const squareStr = square.toString();
  
  return squareStr.endsWith(numStr) ? "Automorphic" : "Not!!";
}
