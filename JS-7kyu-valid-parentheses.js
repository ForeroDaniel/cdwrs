function validParentheses(a) {
  while (a.includes('()')){
    a = a.replace(/\(\)/g, '')
  }
  return a === ''
}
