function getPINs(observed) {
  const adjacentDigits = {
    '0': ['0', '8'],
    '1': ['1', '2', '4'],
    '2': ['1', '2', '3', '5'],
    '3': ['2', '3', '6'],
    '4': ['1', '4', '5', '7'],
    '5': ['2', '4', '5', '6', '8'],
    '6': ['3', '5', '6', '9'],
    '7': ['4', '7', '8'],
    '8': ['0', '5', '7', '8', '9'],
    '9': ['6', '8', '9']
  };

  const variations = [""];
  for (let digit of observed) {
    const newVariations = [];
    for (let variation of variations) {
      for (let adjDigit of adjacentDigits[digit]) {
        newVariations.push(variation + adjDigit);
      }
    }
    variations.length = 0;
    variations.push(...newVariations);
  }

  return variations;
}
