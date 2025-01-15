function fibonacci(n, cache = {}) {
  // Base case: if n is less than 2, return n
  if (n < 2) return n;

  // If the value is already computed and cached, return it
  if (n in cache) return cache[n];

  // Otherwise, compute the Fibonacci value recursively
  const result = fibonacci(n - 1, cache) + fibonacci(n - 2, cache);

  // Store the result in the cache before returning it
  cache[n] = result;

  return result;
}
