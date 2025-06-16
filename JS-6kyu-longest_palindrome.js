function longestPalindrome(s) {
    if (s.length === 0) return 0;
    let maxLength = 1;
    for (let i = 0; i < s.length; i++) {
        // Check for odd-length palindromes
        let left = i;
        let right = i;
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            const currentLength = right - left + 1;
            if (currentLength > maxLength) {
                maxLength = currentLength;
            }
            left--;
            right++;
        }
        // Check for even-length palindromes
        left = i;
        right = i + 1;
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            const currentLength = right - left + 1;
            if (currentLength > maxLength) {
                maxLength = currentLength;
            }
            left--;
            right++;
        }
    }
    return maxLength;
}
