function fizzbuzz(n){
  const arr = Array.from({ length: n }, (_, index) => index + 1);
  const result = arr.map(x => 
                         x % 3 === 0 && x % 5 === 0 ? 
                         "FizzBuzz" : 
                         x % 3 === 0 ? 
                         "Fizz" : 
                         x % 5 === 0 ? 
                         "Buzz" : x
                        )
  return result;
}
