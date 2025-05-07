function decipherThis(str) {
    return str.split(' ').map(word => {
        // Extract number and convert to letter
        const first = String.fromCharCode(word.match(/\d+/)[0]);
        
        // Get rest of word
        const rest = word.replace(/\d+/, '');
        
        // If 1 char or less, return as is
        if (rest.length <= 1) return first + rest;
        
        // Swap second and last letters
        return first + rest.slice(-1) + rest.slice(1, -1) + rest[0];
    }).join(' ');
}
