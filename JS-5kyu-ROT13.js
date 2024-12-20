function rot13(str) {
  return str.split('').map(char => {
        // Check if character is a letter
        if (/[a-zA-Z]/.test(char)) {
            const base = char <= 'Z' ? 65 : 97; // ASCII codes for 'A' and 'a'
            return String.fromCharCode(((char.charCodeAt(0) - base + 13) % 26) + base);
        }
        // Return the character unchanged if it's not a letter
        return char;
    }).join('');
}
