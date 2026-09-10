function caffeineBuzz(n){
  console.log(n);
  //if (n % 2 === 0) {return 'JavaScript'}
  if (n % 3 === 0 ) {
    if (n % 4 === 0) {
      return (n % 2 === 0) ? "CoffeeScript" : "Coffee";
    } else {
      return (n % 2 === 0) ? "JavaScript" : "Java";
    }
  } else {
    return "mocha_missing!"
  }
}
