function convertFrac(lst) {
    if (lst.length === 0) return "";

    // Extract denominators
    const denominators = lst.map(frac => frac[1]);

    // Function to calculate GCD of two numbers
    function gcd(a, b) {
        while (b !== 0) {
            [a, b] = [b, a % b];
        }
        return a;
    }

    // Function to calculate LCM of two numbers
    function lcm(a, b) {
        return (a * b) / gcd(a, b);
    }

    // Calculate LCM of all denominators
    let commonDenominator = denominators.reduce((acc, denom) => lcm(acc, denom), 1);

    // Adjust numerators to have the common denominator
    const result = lst.map(frac => {
        const numerator = frac[0] * (commonDenominator / frac[1]);
        return [numerator, commonDenominator];
    });

    // Format the result as a string
    return result.map(frac => `(${frac[0]},${frac[1]})`).join('');
}
