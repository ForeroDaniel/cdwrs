class RomanNumerals {
  static toRoman(number) {
    const romanNumerals = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1, 
  };

  let roman = "";

  for (let key in romanNumerals) {
    while (number >= romanNumerals[key]) {
      roman += key;
      number -= romanNumerals[key];
    }
  }
  return roman;
  }

  static fromRoman(romanNumeral) {
    const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let result = 0;

    for (let i = 0; i < romanNumeral.length; i++) {
        if (i > 0 && romanMap[romanNumeral[i]] > romanMap[romanNumeral[i - 1]]) {
            result += romanMap[romanNumeral[i]] - 2 * romanMap[romanNumeral[i - 1]];
        } else {
            result += romanMap[romanNumeral[i]];
        }
    }

    return result;
  }
}
