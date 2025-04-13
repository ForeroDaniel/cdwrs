function abbreviate(str) {
    if (typeof str !== 'string') return '';
    const tokens = str.match(/[a-zA-Z]+|[^a-zA-Z]+/g) || [];
    return tokens.map(token => {
        if (/^[a-zA-Z]+$/.test(token)) {
            if (token.length >= 4) {
                return token[0] + (token.length - 2) + token.slice(-1);
            }
        }
        return token;
    }).join('');
}
