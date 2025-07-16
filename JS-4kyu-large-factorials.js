function factorial(n) {
    if (n < 0) return null;
    if (n === 0 || n === 1) return "1";
    
    let digits = [1];
    
    for (let i = 2; i <= n; i++) {
        let carry = 0;
        let temp = [];
        
        for (let j = 0; j < digits.length; j++) {
            let product = digits[j] * i + carry;
            temp.push(product % 10);
            carry = Math.floor(product / 10);
        }
        
        while (carry > 0) {
            temp.push(carry % 10);
            carry = Math.floor(carry / 10);
        }
        
        digits = temp;
    }
    
    return digits.reverse().join('');
}
