function matrixAddition(a, b){
  return a.map((row, i) => 
      row.map((num, j) => num + b[i][j])
  );
}
