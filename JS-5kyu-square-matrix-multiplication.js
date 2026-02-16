function matrixMultiplication(a,b){
  return a.map(function(row){
      return row.map(function(_,i){
          return row.reduce(function(sum,cell,j){
              return sum+cell*b[j][i];
          },0);
      });
  });
}
