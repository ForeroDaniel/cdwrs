function disariumNumber(n) {
    const digits = String(n).split('');
    let sum = 0;
    for (let i = 0; i < digits.length; i++) {
        sum += Math.pow(parseInt(digits[i]), i + 1);
    }
    return sum === n ? "Disarium !!" : "Not !!";
}
