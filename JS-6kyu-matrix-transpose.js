function transpose(matrix) {
  var transposed = [],
    rows = matrix.length,
    cols = matrix[0].length;
   
  for(i = 0; i < cols; i++) {
  transposed[i] = [];
    for(var j = 0; j < rows; j++) {
      transposed[i][j] = matrix[j][i];
    }
  }
  
  return transposed;
}
