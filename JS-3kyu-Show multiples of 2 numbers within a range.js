function multiples(a, b, limit) {
  const result = [];
  for (let i = a; i <= limit; i++) {
    if (i % a == 0 && i % b == 0) {
      result.push(i);
    }
  }

  return result;
}
