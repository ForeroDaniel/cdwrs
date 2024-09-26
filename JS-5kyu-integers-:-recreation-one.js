function listSquared(m, n) {
    // Helper function to get all divisors of a number
    function getDivisors(num) {
        const divisors = [];
        for (let i = 1; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                divisors.push(i);
                if (i !== num / i) {
                    divisors.push(num / i);
                }
            }
        }
        return divisors;
    }

    // Helper function to check if a number is a perfect square
    function isPerfectSquare(x) {
        const s = Math.sqrt(x);
        return s === Math.floor(s);
    }

    const result = [];

    // Iterate through each number from m to n
    for (let i = m; i <= n; i++) {
        const divisors = getDivisors(i);
        const sumOfSquares = divisors.reduce((sum, divisor) => sum + divisor * divisor, 0);
        if (isPerfectSquare(sumOfSquares)) {
            result.push([i, sumOfSquares]);
        }
    }

    return result;
}
