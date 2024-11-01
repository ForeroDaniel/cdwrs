var decodeBits = function( bits ) {
  bits = bits.replace( /(^0+|0+$)/g, '' );
  let timeUnit = Math.min.apply( null, bits.match( /0+|1+/g ).map( item => item.length ) );
  
  return bits
    .replace( new RegExp( '0'.repeat( 7 * timeUnit ), 'g' ), '   ' )
    .replace( new RegExp( '0'.repeat( 3 * timeUnit ), 'g' ), ' ' )
    .replace( new RegExp( '1'.repeat( 3 * timeUnit ), 'g' ), '-' )
    .replace( new RegExp( '1'.repeat( 1 * timeUnit ), 'g' ), '.' )
    .replace( new RegExp( '0'.repeat( 1 * timeUnit ), 'g' ), '' );
};

var decodeMorse = function(morseCode){
    return morseCode.trim().split( '   ' )
      .reduce( ( res, word ) => res + ' ' + word.split( ' ' ).reduce( ( word, letter ) => word + MORSE_CODE[ letter ], '' ), '' )
      .trim();
};
