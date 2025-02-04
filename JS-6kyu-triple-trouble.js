function tripledouble(num1, num2) {
    // Convert numbers to strings to make it easier to check digits
    const str1 = num1.toString();
    const str2 = num2.toString();
    
    // Iterate through all digits of num1
    for (let i = 0; i < str1.length - 2; i++) {
        const digit = str1[i];
        // Check if there is a triple of the same digit in num1
        if (str1[i] === str1[i + 1] && str1[i + 1] === str1[i + 2]) {
            // Now check if the same digit forms a double in num2
            if (str2.includes(digit + digit)) {
                return 1; // If both conditions are met, return 1
            }
        }
    }
    
    // If no such digit is found, return 0
    return 0;
}
