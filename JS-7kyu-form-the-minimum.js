function minValue(digits) {
    const uniqueDigits = [...new Set(digits)];
    const sortedDigits = uniqueDigits.sort((a, b) => a - b);
    return parseInt(sortedDigits.join(''));
}
