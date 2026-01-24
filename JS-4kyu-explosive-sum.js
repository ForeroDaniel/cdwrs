function sum(n) {
  // Create an array to store the number of ways to partition each number up to n.
  // We fill it with 0 initially.
  // size is n + 1 to handle the 0 index.
  const ways = new Array(n + 1).fill(0);

  // Base case: There is 1 way to make the sum of 0 (by choosing nothing).
  ways[0] = 1;

  // We iterate through every integer 'part' that can be used to make the sum (1 to n)
  for (let part = 1; part <= n; part++) {
    // For each part, we update the counts for all numbers 'i' that are greater than or equal to the part.
    // We add the number of ways to form (i - part) to the current number of ways to form i.
    for (let i = part; i <= n; i++) {
      ways[i] += ways[i - part];
    }
  }

  return ways[n];
}
