function encodeRailFenceCipher(string, numberRails) {
    if (string.length === 0 || numberRails < 2) return string;
    
    const rails = Array.from({ length: numberRails }, () => []);
    let currentRail = 0;
    let direction = 1;
    
    for (const char of string) {
        rails[currentRail].push(char);
        currentRail += direction;
        if (currentRail === numberRails - 1 || currentRail === 0) {
            direction *= -1;
        }
    }
    
    return rails.flat().join('');
}

function decodeRailFenceCipher(string, numberRails) {
    if (string.length === 0 || numberRails < 2) return string;
    
    // Create a matrix to simulate the rail pattern
    const railPattern = Array.from({ length: numberRails }, () => []);
    let currentRail = 0;
    let direction = 1;
    
    // Determine the positions of each character in the rails
    for (let i = 0; i < string.length; i++) {
        railPattern[currentRail].push(i);
        currentRail += direction;
        if (currentRail === numberRails - 1 || currentRail === 0) {
            direction *= -1;
        }
    }
    
    // Flatten the rail pattern to get the order of indices
    const indices = railPattern.flat();
    
    // Reconstruct the original string
    const decoded = new Array(string.length);
    for (let i = 0; i < string.length; i++) {
        decoded[indices[i]] = string[i];
    }
    
    return decoded.join('');
}
