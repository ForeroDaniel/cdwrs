const catchSignChange = (arr) => 
    arr.reduce((count, current, i, array) => {
    // Stop if we are at the last element to prevent out-of-bounds check
    if (i === array.length - 1) return count;
    
    // Compare current element with the next element
    const isSignChange = (current >= 0) !== (array[i + 1] >= 0);
    
    return isSignChange ? count + 1 : count;
}, 0);
