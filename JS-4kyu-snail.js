snail = function(array) {
  let result = []
  
  while (array.length > 0) {
        result = result.concat(array.shift());
        if (array.length > 0 && array[0].length > 0) {
            for (let i = 0; i < array.length; i++) {
                result.push(array[i].pop());
            }
        }
        if (array.length > 0 && array[0].length > 0) {
            result = result.concat(array.pop().reverse());
        }
        if (array.length > 0 && array[0].length > 0) {
            for (let i = array.length - 1; i >= 0; i--) {
                result.push(array[i].shift());
            }
        }
    }
  
  return result
}
