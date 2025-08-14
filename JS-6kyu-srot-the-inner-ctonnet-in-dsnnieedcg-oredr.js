function sortTheInnerContent(words) {
  return words.split(' ').map(word => {
    if (word.length <= 2) {
      return word;
    }
    const firstChar = word[0];
    const lastChar = word[word.length - 1];
    const innerContent = word.slice(1, -1);
    const sortedInnerContent = innerContent.split('').sort((a, b) => b.localeCompare(a)).join('');
    return `${firstChar}${sortedInnerContent}${lastChar}`;
  }).join(' ');
}
