function sumPairs(ints, s) {
    // Create an empty hash map
    const seen = new Map();
    
    // Iterate through the list
    for (let i = 0; i < ints.length; i++) {
        const current = ints[i];
        const complement = s - current;

        // Check if the complement exists in the hash map
        if (seen.has(complement)) {
            return [complement, current];
        }
        
        // Store the current element in the hash map with its index
        seen.set(current, i);
    }
    
    // If no pair found, return null
    return undefined;
}
