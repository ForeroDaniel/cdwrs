function strong(num) {
    // Function to calculate factorial of a number
    const factorial = n => {
        if (n === 0 || n === 1) return 1;
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    };

    // Convert the number to a string to easily iterate over its digits
    const digits = num.toString().split('');
    
    // Calculate the sum of the factorials of the digits
    const sumOfFactorials = digits.reduce((sum, digit) => sum + factorial(Number(digit)), 0);
    
    // Check if the sum of factorials is equal to the original number
    return sumOfFactorials === num ? "STRONG!!!!" : "Not Strong !!";
}
