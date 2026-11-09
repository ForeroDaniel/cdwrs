function encode(text) {
  return text
    .split('')
    .map(letter => {
      const ascii = letter.charCodeAt(0);                    // "h" -> 104
      const binary = ascii.toString(2).padStart(8, '0');     // 104 -> "01101000"
      return binary
        .split('')
        .map(bit => bit.repeat(3))                           // "0" -> "000", "1" -> "111"
        .join('');
    })
    .join('');
}

function decode(bits) {
  // 1. Separar en grupos de 3 caracteres
  const groups = bits.match(/.{3}/g);

  // 2. Corregir errores: en cada grupo gana el bit que más se repite
  const corrected = groups
    .map(group => {
      const ones = group.split('').filter(b => b === '1').length;
      return ones >= 2 ? '1' : '0';
    })
    .join('');

  // 3. Separar en bytes de 8 bits y convertir cada uno a letra
  const bytes = corrected.match(/.{8}/g);
  return bytes
    .map(byte => String.fromCharCode(parseInt(byte, 2)))
    .join('');
}
