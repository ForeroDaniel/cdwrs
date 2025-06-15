function swap (string) {
  return string.replace(/[aeiou]/gi, (vowel) => vowel.toUpperCase());
}
