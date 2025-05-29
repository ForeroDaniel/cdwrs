function vowel2index(str) {
   return str.split('').map((value, index) => /^[aeiou]+$/i.test(value) ? ++index : value).join('')
}
