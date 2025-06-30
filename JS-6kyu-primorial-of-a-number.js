function numPrimorial(n) {
    function isPrime(num) {
        if (num <= 1) return false;
        if (num === 2) return true;
        if (num % 2 === 0) return false;
        for (let i = 3; i <= Math.sqrt(num); i += 2) {
            if (num % i === 0) return false;
        }
        return true;
    }

    let primes = [];
    let current = 2;
    while (primes.length < n) {
        if (isPrime(current)) {
            primes.push(current);
        }
        current++;
    }

    return primes.reduce((product, prime) => product * prime, 1);
}
