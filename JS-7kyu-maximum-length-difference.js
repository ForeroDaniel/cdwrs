function mxdiflg(a1, a2) {
    // Check if either array is empty
    if (a1.length === 0 || a2.length === 0) {
        return -1;
    }

    // Helper function to get the length of each string in an array
    function getLengths(arr) {
        return arr.map(str => str.length);
    }

    // Get lengths of strings in both arrays
    const lengthsA1 = getLengths(a1);
    const lengthsA2 = getLengths(a2);

    // Find the maximum and minimum lengths for both arrays
    const maxA1 = Math.max(...lengthsA1);
    const minA1 = Math.min(...lengthsA1);
    const maxA2 = Math.max(...lengthsA2);
    const minA2 = Math.min(...lengthsA2);

    // Calculate the maximum absolute difference
    const maxDiff1 = Math.abs(maxA1 - minA2);
    const maxDiff2 = Math.abs(maxA2 - minA1);

    return Math.max(maxDiff1, maxDiff2);
}
