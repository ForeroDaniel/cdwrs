function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}

function reverseNumber(num) {
    return parseInt(num.toString().split('').reverse().join(''), 10);
}

function backwardsPrime(start, end) {
    const result = [];
    for (let num = start; num <= end; num++) {
        if (isPrime(num)) {
            const reversedNum = reverseNumber(num);
            if (reversedNum !== num && isPrime(reversedNum)) {
                result.push(num);
            }
        }
    }
    return result;
}
