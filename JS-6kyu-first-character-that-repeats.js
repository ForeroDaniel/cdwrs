function firstDup (s) {
  return s[s.search(/(.).*\1/ )]
}
