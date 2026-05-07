function mean(lst){
  var num = 0, str = '';
  lst.forEach(function(n) {
    if(!isNaN(n)) {
      num += +n;
    }else {
      str += n;
    }
  });  
  return [num / 10, str];
}
