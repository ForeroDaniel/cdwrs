function stringTransformer(str) {
    // Change the case of every character
    let caseChanged = '';
    for (let char of str) {
        if (char === char.toUpperCase() && char !== char.toLowerCase()) {
            caseChanged += char.toLowerCase();
        } else if (char === char.toLowerCase() && char !== char.toUpperCase()) {
            caseChanged += char.toUpperCase();
        } else {
            caseChanged += char;
        }
    }
    
    // Split into tokens of words and spaces
    const tokens = caseChanged.split(/(\s+)/);
    
    // Reverse the tokens
    const reversedTokens = tokens.reverse();
    
    // Join the tokens back into a string
    const result = reversedTokens.join('');
    
    return result;
}
