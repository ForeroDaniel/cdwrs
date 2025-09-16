function getIssuer(number) {
  // Convert the number to a string to easily use startsWith and check length
  const numStr = number.toString();
  const len = numStr.length;

  // AMEX
  // Begins With 34 or 37, Number Length 15
  if ((numStr.startsWith('34') || numStr.startsWith('37')) && len === 15) {
    return 'AMEX';
  }

  // Discover
  // Begins With 6011, Number Length 16
  if (numStr.startsWith('6011') && len === 16) {
    return 'Discover';
  }

  // Mastercard
  // Begins With 51, 52, 53, 54 or 55, Number Length 16
  if ((numStr.startsWith('51') || numStr.startsWith('52') || numStr.startsWith('53') || numStr.startsWith('54') || numStr.startsWith('55')) && len === 16) {
    return 'Mastercard';
  }

  // VISA
  // Begins With 4, Number Length 13 or 16
  if (numStr.startsWith('4') && (len === 13 || len === 16)) {
    return 'VISA';
  }

  // If no match is found
  return 'Unknown';
}
