function findDigit(num, nth) {
    // Handle negative numbers by taking the absolute value
    num = Math.abs(num);
    
    // If nth is not positive, return -1
    if (nth <= 0) return -1;
    
    const numStr = num.toString();
    
    // If nth is greater than the length of the number, return 0
    if (nth > numStr.length) return 0;
    
    // Return the nth digit from the right
    return parseInt(numStr[numStr.length - nth]);
}
