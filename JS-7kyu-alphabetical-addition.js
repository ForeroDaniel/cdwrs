function addLetters(...letters) {
    if (letters.length === 0) return 'z';
    const sum = letters.reduce((acc, letter) => acc + (letter.charCodeAt(0) - 96), 0);
    const mod = sum % 26;
    return mod === 0 ? 'z' : String.fromCharCode(96 + mod);
}
