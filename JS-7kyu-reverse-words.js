function reverseWords(str) {
  return str.split(' ').map(e => [...e].reverse().join('')).join(' ')
}
