function checkThreeAndTwo(array) {
  let as = array.filter(x =>x === 'a').length;
  let bs = array.filter(x =>x === 'b').length;
  let cs = array.filter(x =>x === 'c').length;
  return (as === 3 || bs === 3 || cs=== 3)  
          && (as === 2 || bs === 2 || cs === 2);
}
