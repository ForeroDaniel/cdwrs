function isPalindrome(x) {
  return x.toLowerCase() === [...x.toLowerCase()].reverse().join('')
}
