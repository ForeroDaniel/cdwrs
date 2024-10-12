function add(num1, num2) {
    let carry = 0;
    let result = [];
    let maxLength = Math.max(num1.length, num2.length);

    // Pad the shorter number with leading zeros
    num1 = num1.padStart(maxLength, '0');
    num2 = num2.padStart(maxLength, '0');

    // Perform addition digit by digit
    for (let i = maxLength - 1; i >= 0; i--) {
        const digit1 = parseInt(num1[i], 10);
        const digit2 = parseInt(num2[i], 10);
        
        let sum = digit1 + digit2 + carry;
        carry = Math.floor(sum / 10);
        result.unshift(sum % 10);
    }

    // If there's a carry left, add it to the result
    if (carry > 0) result.unshift(carry);

    // Convert result array to string and return
    return result.join('');
}
