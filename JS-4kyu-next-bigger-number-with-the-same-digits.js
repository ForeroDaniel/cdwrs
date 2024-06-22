function nextBigger(num){
  // Step 1: Convert the number to an array of digits
    let digits = Array.from(String(num), Number);
    
    // Step 2: Find the pivot index
    let pivotIndex = -1;
    for (let i = digits.length - 1; i > 0; i--) {
        if (digits[i] > digits[i - 1]) {
            pivotIndex = i - 1;
            break;
        }
    }
    
    // If no pivot index found, return -1
    if (pivotIndex === -1) return -1;
    
    // Step 3: Find the successor index
    let successorIndex = -1;
    for (let i = digits.length - 1; i > pivotIndex; i--) {
        if (digits[i] > digits[pivotIndex]) {
            successorIndex = i;
            break;
        }
    }
    
    // Step 4: Swap the pivot digit with the successor digit
    [digits[pivotIndex], digits[successorIndex]] = [digits[successorIndex], digits[pivotIndex]];
    
    // Step 5: Sort the digits to the right of the pivot digit in ascending order
    let sortedDigits = digits.slice(pivotIndex + 1).sort((a, b) => a - b);
    
    // Step 6: Concatenate the digits to form the next bigger number
    let nextBigger = [...digits.slice(0, pivotIndex + 1), ...sortedDigits].join('');
    
    return parseInt(nextBigger);
}
