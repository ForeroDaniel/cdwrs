function vowelIndices(word){
  const vowels = /[aeiouyAEIOUY]/; // Regex to match vowels
  const indices = [];

  for (let i = 0; i < word.length; i++) {
      if (vowels.test(word[i])) indices.push(i + 1);
  }

  return indices;
}
