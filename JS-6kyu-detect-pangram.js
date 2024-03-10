function isPangram(str){
    // Convert the string to lowercase
    const lowerStr = str.toLowerCase();

    // Use a regular expression to check if all letters from a to z are present
    const regex = /([a-z])(?!.*\1)/g;

    // Match all unique lowercase letters
    const uniqueLetters = lowerStr.match(regex);

    // If there are 26 unique letters (a to z), it's a pangram
    return uniqueLetters !== null && uniqueLetters.length === 26;
}
