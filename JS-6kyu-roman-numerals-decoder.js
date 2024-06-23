function solution(romanNumeral) {
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
