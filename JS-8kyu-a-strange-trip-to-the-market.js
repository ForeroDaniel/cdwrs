function isLockNessMonster(s) {
    // Convert string to lowercase for case insensitivity
    s = s.toLowerCase();
    
    // Check if the string contains any of the variations of "tree fiddy"
    return /tree fiddy|3\.50|three fifty/.test(s);
}
