function add(num1, num2) {
  const str1 = num1.toString();
  const str2 = num2.toString();
  const maxLength = Math.max(str1.length, str2.length);
  
  // Pad with leading zeros to make lengths equal
  const padded1 = str1.padStart(maxLength, '0');
  const padded2 = str2.padStart(maxLength, '0');
  
  let result = '';
  
  for (let i = 0; i < maxLength; i++) {
    // Add corresponding digits
    const digitSum = parseInt(padded1[i]) + parseInt(padded2[i]);
    // Concatenate to result
    result += digitSum.toString();
  }
  
  return parseInt(result);
}
