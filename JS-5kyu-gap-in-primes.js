function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

function gap(g, m, n) {
    let lastPrime = null;

    for (let i = m; i <= n; i++) {
        if (isPrime(i)) {
            if (lastPrime !== null && i - lastPrime === g) {
                return [lastPrime, i];
            }
            lastPrime = i;
        }
    }

    return null;
}
