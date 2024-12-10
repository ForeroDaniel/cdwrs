function encode(string) {
  // Create a mapping of vowels to their corresponding numbers
    const vowelMap = {
        'a': '1',
        'e': '2',
        'i': '3',
        'o': '4',
        'u': '5'
    };

    // Use the replace method with a regular expression to replace vowels
    return string.replace(/[aeiou]/g, match => vowelMap[match]);
}

function decode(string) {
  // Create a mapping of numbers back to their corresponding vowels
    const numberMap = {
        '1': 'a',
        '2': 'e',
        '3': 'i',
        '4': 'o',
        '5': 'u'
    };

    // Use the replace method with a regular expression to replace numbers with vowels
    return string.replace(/[1-5]/g, (match) => numberMap[match]);
}
