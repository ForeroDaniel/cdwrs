function closeCompare(a, b, margin = 0) {
    // Check if the absolute difference between a and b is within the margin
    if (Math.abs(a - b) <= margin) {
        return 0; // a is close to b
    }
    
    // If not close, compare a and b
    if (a < b) {
        return -1; // a is less than b
    } else if (a > b) {
        return 1; // a is greater than b
    }
    
    // If a and b are equal
    return 0; 
}
