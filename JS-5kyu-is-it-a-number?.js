function isDigit(s) {
    // Trim the string to remove leading/trailing whitespaces
    s = s.trim();
    
    // Regular expression to match valid numbers
    const regex = /^[-+]?\d+(\.\d+)?$/;
    
    // Test if the string matches the regex
    return regex.test(s);
}
