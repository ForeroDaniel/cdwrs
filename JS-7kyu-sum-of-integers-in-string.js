function sumOfIntegersInString(str) {
    let sum = 0;
    let currentNumber = '';
    for (let char of str) {
        if (/\d/.test(char)) {
            currentNumber += char;
        } else {
            if (currentNumber.length > 0) {
                sum += parseInt(currentNumber, 10);
                currentNumber = '';
            }
        }
    }
    // Add the last number if the string ends with digits
    if (currentNumber.length > 0) {
        sum += parseInt(currentNumber, 10);
    }
    return sum;
}
