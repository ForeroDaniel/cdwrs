function convert(input, fromAlphabet, toAlphabet) {
  const fromBase = fromAlphabet.length;
  const toBase = toAlphabet.length;

  // Step 1: Convert from source alphabet to a decimal number
  // We iterate through the string, multiplying the current total by the base 
  // and adding the value of the current digit.
  let decimalValue = 0;
  for (let i = 0; i < input.length; i++) {
    const charValue = fromAlphabet.indexOf(input[i]);
    decimalValue = (decimalValue * fromBase) + charValue;
  }

  // Step 2: Convert from decimal to the target alphabet
  if (decimalValue === 0) return toAlphabet[0];

  let result = '';
  while (decimalValue > 0) {
    const remainder = decimalValue % toBase;
    result = toAlphabet[remainder] + result;
    decimalValue = Math.floor(decimalValue / toBase);
  }

  return result
}
