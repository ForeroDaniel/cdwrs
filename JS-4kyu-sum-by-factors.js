function getPrimeFactors(num) {
    const factors = new Set();
    num = Math.abs(num); // Use absolute value to handle negatives
    // Check for number of 2s that divide num
    while (num % 2 === 0) {
        factors.add(2);
        num /= 2;
    }
    // Check for odd factors from 3 upwards
    for (let i = 3; i * i <= num; i += 2) {
        while (num % i === 0) {
            factors.add(i);
            num /= i;
        }
    }
    // If num is a prime number greater than 2
    if (num > 2) {
        factors.add(num);
    }
    return Array.from(factors);
}

function sumOfDivided(I) {
    const primeSumMap = new Map();

    for (const number of I) {
        const primeFactors = getPrimeFactors(number); // Get factors of the current number
        for (const prime of primeFactors) {
            if (primeSumMap.has(prime)) {
                primeSumMap.set(prime, primeSumMap.get(prime) + number);
            } else {
                primeSumMap.set(prime, number);
            }
        }
    }

    // Convert the map to an array and sort it by prime factors
    const P = Array.from(primeSumMap.entries()).sort((a, b) => a[0] - b[0]);
    return P;
}
