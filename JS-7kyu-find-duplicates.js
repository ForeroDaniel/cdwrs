function duplicates(arr) {
  const seen = new Set();
  const duplicateResults = new Set();

  for (const item of arr) {
    if (seen.has(item)) {
      duplicateResults.add(item);
    } else {
      seen.add(item);
    }
  }

  return [...duplicateResults];
}
