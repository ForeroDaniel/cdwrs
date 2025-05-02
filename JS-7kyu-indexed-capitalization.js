function capitalize(s, arr) {
    let chars = s.split('');
    
    arr.forEach(index => {
        // Check if index is valid (within string length)
        if (index < s.length) {
            // Capitalize the character at that index
            chars[index] = chars[index].toUpperCase();
        }
    });
    
    return chars.join('');
}
