function presses(phrase) {
    // Keypad mapping: key -> characters (position indicates presses needed)
    const keypad = {
        '1': '1',
        '2': 'ABC2',
        '3': 'DEF3',
        '4': 'GHI4',
        '5': 'JKL5',
        '6': 'MNO6',
        '7': 'PQRS7',
        '8': 'TUV8',
        '9': 'WXYZ9',
        '0': ' 0',  // Space and 0
        '*': '*',
        '#': '#'
    };
    
    // Convert phrase to uppercase and split into characters
    const chars = phrase.toUpperCase().split('');

    
    // Calculate total presses
    return chars.reduce((total, char) => {
        // Find the key containing this character
        for (let key in keypad) {
            const index = keypad[key].indexOf(char);
            if (index !== -1) {
                // Add number of presses (index + 1)
                return total + index + 1;
            }
        }
        // If character not found (e.g., punctuation), add 0
        return total;
    }, 0);
}
