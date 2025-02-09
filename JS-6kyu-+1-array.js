function upArray(digits){
  // Check if the array is valid (not empty, only non-negative single-digit integers)
    if (!Array.isArray(digits) || digits.length === 0 || digits.some(num => num < 0 || num > 9 || !Number.isInteger(num))) {
        return null;
    }

    // Start from the last digit and add 1
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i] += 1;  // No carry needed, just add 1
            return digits;    // Return the result immediately
        }
        digits[i] = 0;  // Set the current digit to 0 and continue the carry
    }

    // If all digits were 9, we need an extra leading 1 (e.g., 999 -> 1000)
    digits.unshift(1);

    return digits;
}
