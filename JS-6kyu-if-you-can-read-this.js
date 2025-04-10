function toNato(words) {
    const tokens = [];
    for (const char of words) {
        if (/[a-zA-Z]/.test(char)) {
            tokens.push(NATO[char.toUpperCase()]);
        } else if (/[,.!?]/.test(char)) {
            tokens.push(char);
        }
        // Ignore spaces and other characters
    }
    return tokens.join(' ');
}
