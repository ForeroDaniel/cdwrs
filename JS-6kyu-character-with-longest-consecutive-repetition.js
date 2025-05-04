function longestRepetition(s) {
    // Handle empty string case
    if (s.length === 0) return ["", 0];
    
    let maxChar = s[0];    // Character with longest repetition
    let maxCount = 1;      // Length of longest repetition
    let currentChar = s[0]; // Current character being counted
    let currentCount = 1;   // Current repetition count
    
    // Iterate through string starting from second character
    for (let i = 1; i < s.length; i++) {
        if (s[i] === currentChar) {
            // Same character, increment count
            currentCount++;
        } else {
            // New character, reset count and update currentChar
            currentChar = s[i];
            currentCount = 1;
        }
        
        // Update max if current count exceeds previous max
        if (currentCount > maxCount) {
            maxCount = currentCount;
            maxChar = currentChar;
        }
    }
    
    return [maxChar, maxCount];
}
