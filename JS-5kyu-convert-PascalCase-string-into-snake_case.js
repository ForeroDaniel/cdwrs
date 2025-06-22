function toUnderscore(str) {
    if (typeof str !== 'string') {
        return String(str);
    }
    let result = '';
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (i > 0 && char === char.toUpperCase() && char !== char.toLowerCase()) {
            result += '_' + char.toLowerCase();
        } else {
            result += char.toLowerCase();
        }
    }
    return result;
}
