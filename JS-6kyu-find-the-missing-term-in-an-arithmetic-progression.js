function findMissing(arr) {
    const n = arr.length;
    
    // Step 1: Compute potential common differences
    const d1 = (arr[n - 1] - arr[0]) / n;  // Difference assuming the missing term is not at the end
    const d2 = (arr[n - 2] - arr[0]) / (n - 1); // Difference assuming the missing term is at the end

    // Determine which difference is correct
    let commonDifference;
    if (Math.abs(d1 - Math.round(d1)) < 0.0001) {
        commonDifference = d1;
    } else {
        commonDifference = d2;
    }

    // Step 2: Compute the sum of the AP with the missing term
    const expectedSum = ((arr[0] + arr[n - 1]) * (n + 1)) / 2;
    
    // Step 3: Compute the actual sum of the given terms
    const actualSum = arr.reduce((acc, val) => acc + val, 0);
    
    // The missing term is the difference between the expected sum and the actual sum
    return expectedSum - actualSum;
}
