function productFib(prod){
  let a = 0;
  let b = 1;
  
  while (a * b < prod){
    let temp = a;
    a = b;
    b = a + temp;
  }
  
  if (a * b === prod){
    return [a, b, true]
  }
  return [a, b, false]
}
