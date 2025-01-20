function foldArray(array, runs) {
    for (let i = 0; i < runs; i++) {
        let foldedArray = [];
        let n = array.length;
        
        // Fold the array
        for (let j = 0; j < Math.floor(n / 2); j++) foldedArray.push(array[j] + array[n - 1 - j]);

        // If the array has an odd length, add the middle element as it is
        if (n % 2 !== 0) foldedArray.push(array[Math.floor(n / 2)]);

        // Update the array to the folded one
        array = foldedArray;
    }
    return array;
}
