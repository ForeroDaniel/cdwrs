function toWeirdCase(str){
  return str.split(' ')
            .map(word => {
                  return word.split('')
                             .map((char, index) => {
                                  // Toggle case for even-indexed characters
                                  return index % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
                             }).join('');
             }).join(' ');
}
