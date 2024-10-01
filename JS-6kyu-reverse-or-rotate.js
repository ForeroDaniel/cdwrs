function revrot(str, sz) {
    // Validate input
    if (sz <= 0 || str === "" || sz > str.length) {
        return "";
    }

    // Helper function to calculate the sum of digits in a chunk
    function sumOfDigits(chunk) {
        return chunk.split('').reduce((sum, digit) => sum + parseInt(digit), 0);
    }

    // Helper function to rotate a chunk to the left by one position
    function rotateLeft(chunk) {
        return chunk.slice(1) + chunk[0];
    }

    // Helper function to reverse a chunk
    function reverseChunk(chunk) {
        return chunk.split('').reverse().join('');
    }

    let result = '';
    for (let i = 0; i < str.length; i += sz) {
        const chunk = str.slice(i, i + sz);
        
        // Process the chunk
        if (chunk.length === sz) {
            const sum = sumOfDigits(chunk);
            if (sum % 2 === 0) {
                result += reverseChunk(chunk);
            } else {
                result += rotateLeft(chunk);
            }
        }
    }

    return result;
}
