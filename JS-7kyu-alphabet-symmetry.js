function solve(words) {
    return words.map(word => {
        return word.split('').filter((char, index) => {
            // Convert the character to lowercase
            let lowerChar = char.toLowerCase();
            // Get the 1-based position of the character in the alphabet
            let alphabetPosition = lowerChar.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
            // Compare the alphabet position with the 1-based index position (index + 1)
            return alphabetPosition === (index + 1);
        }).length;
    });
}
