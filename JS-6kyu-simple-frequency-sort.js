function solve(arr) {
  // 1. Create a frequency map to count occurrences of each number
  const frequency = {};
  for (const num of arr) {
    frequency[num] = (frequency[num] || 0) + 1;
  }

  // 2. Sort the array using a custom comparator
  return arr.sort((a, b) => {
    // Get the frequency of both numbers
    const freqA = frequency[a];
    const freqB = frequency[b];

    // Primary Sort Criterion: Frequency (Descending)
    // If frequencies are different, subtract A from B to sort high-to-low
    if (freqA !== freqB) {
      return freqB - freqA;
    }

    // Secondary Sort Criterion: Value (Ascending)
    // If frequencies are the same, subtract B from A to sort low-to-high
    return a - b;
  });
}
