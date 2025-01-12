function removeNb(n) {
    const totalSum = (n * (n + 1)) / 2;  // Sum of all numbers from 1 to n
    const target = totalSum + 1;  // We are looking for pairs (a+1)*(b+1) = totalSum + 1
    let result = [];

    // Iterate over possible divisors
    for (let a = 1; a <= n; a++) {
        if (target % (a + 1) === 0) {
            let b = target / (a + 1) - 1;
            if (b > 0 && b <= n && b !== a) {
                result.push([a, b]);
            }
        }
    }

    // If no valid pair is found, return an empty array
    return result.length === 0 ? [] : result;
}
