function validISBN10(isbn) {
    if (isbn.length !== 10) return false;
    
    let sum = 0;
    for (let i = 0; i < 10; i++) {
        const c = isbn[i];
        if (i < 9) {
            if (c < '0' || c > '9') return false;
            sum += (i + 1) * parseInt(c, 10);
        } else {
            if (c === 'X' || c === 'x') {
                sum += 10 * 10;
            } else if (c >= '0' && c <= '9') {
                sum += 10 * parseInt(c, 10);
            } else {
                return false;
            }
        }
    }
    
    return sum % 11 === 0;
}
