function switcher(arr) {
    let result = '';
    for (const numStr of arr) {
        const num = parseInt(numStr, 10);
        if (num >= 1 && num <= 26) {
            // Calculate the corresponding letter in reverse order (a=26, z=1)
            const charCode = 96 + (27 - num); // 96 + (27 - num) gives 'a' for 26, 'z' for 1
            result += String.fromCharCode(charCode);
        } else if (num === 27) {
            result += '!';
        } else if (num === 28) {
            result += '?';
        } else if (num === 29) {
            result += ' ';
        }
    }
    return result;
}
