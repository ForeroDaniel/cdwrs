function mostFrequentItemCount(collection) {
  if (collection.length === 0) return 0;

  const frequencyObject = {};

  for (const item of collection) frequencyObject[item] = (frequencyObject[item] || 0) + 1;

  const counts = Object.values(frequencyObject);
  return Math.max(...counts);
}
