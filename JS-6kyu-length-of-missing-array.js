function getLengthOfMissingArray(arrayOfArrays) {
    if (!arrayOfArrays || arrayOfArrays.length === 0) {
        return 0;
    }
    
    const lengths = [];
    for (const arr of arrayOfArrays) {
        if (!arr || arr.length === 0) {
            return 0;
        }
        lengths.push(arr.length);
    }
    
    lengths.sort((a, b) => a - b);
    
    for (let i = 0; i < lengths.length - 1; i++) {
        if (lengths[i + 1] !== lengths[i] + 1) {
            return lengths[i] + 1;
        }
    }
    
    return 0;
}
