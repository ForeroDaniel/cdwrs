function autocomplete(input, dictionary) {
  const cleanedInput = input.replace(/[^a-zA-Z]/g, '');
  
  const results = dictionary.filter(word => {
    return word.toLowerCase().startsWith(cleanedInput.toLowerCase());
  });
  
  return results.slice(0, 5);
}
