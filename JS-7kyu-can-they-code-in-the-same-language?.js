function isSameLanguage(list) {
  return new Set(list.map(dev => dev.language)).size === 1;
}
