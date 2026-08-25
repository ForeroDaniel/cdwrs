function permuteAPalindrome (input) { 
  return input
    .split('')
    .sort((a, b) => a.charCodeAt() - b.charCodeAt())
    .join('')
    .replace(/(.)\1/g, '')
    .length <= 1;
}
