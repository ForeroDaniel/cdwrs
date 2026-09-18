function solve(a){
    
    let theEvens = a.filter(number => number % 2 == 0); // find even numbers
    let theOdds = a.filter(number => number % 2 == 1); // find odd numbers
    return theEvens.length - theOdds.length; //return number of evens minus number of odds

  };
