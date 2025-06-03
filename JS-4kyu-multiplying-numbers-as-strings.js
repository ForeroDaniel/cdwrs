function multiply(a, b) {
    if (a === "0" || b === "0") return "0";
    
    const len1 = a.length;
    const len2 = b.length;
    const result = new Array(len1 + len2).fill(0);
    
    for (let i = len1 - 1; i >= 0; i--) {
        for (let j = len2 - 1; j >= 0; j--) {
            const product = (a[i] - '0') * (b[j] - '0');
            const sum = product + result[i + j + 1];
            result[i + j + 1] = sum % 10;
            result[i + j] += Math.floor(sum / 10);
        }
    }
    
    let resultStr = result.join('');
    let start = 0;
    while (start < resultStr.length && resultStr[start] === '0') {
        start++;
    }
    
    return resultStr.substring(start);
}
