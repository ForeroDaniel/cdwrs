function landPerimeter(arr) {
  var result = 0;
  
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[0].length; j++) {
      if (arr[i][j] == 'O') continue;
      result+=4;
      if (i!=arr.length-1 && arr[i+1][j]!='O') { result-=2; }
      if (j!=arr[0].length-1 && arr[i][j+1]!='O') { result-=2; }
    }
  }
  return 'Total land perimeter: ' + result;
}
