// Return the output array, and ignore all non-op characters
function parse( data ){
  let counter = 0;
  let result = [];
  console.log(data)
  data.split('').forEach(function(x){
        switch(x) {
        case 'i':
            counter++;
            break;
        case 'd':
            counter--;
            break;
        case 's':
            counter *= counter;
            break;
        case 'o':
            result.push(counter);
            break;
    }

  })  
  return result
}
