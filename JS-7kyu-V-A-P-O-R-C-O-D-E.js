function vaporcode(string) {
  return string.replace(/\s/g, '')
               .split('')
               .join('  ')
               .toUpperCase()
}
