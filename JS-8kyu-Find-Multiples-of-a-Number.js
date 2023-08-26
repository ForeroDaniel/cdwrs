function findMultiples(integer, limit) {
  let multiples = [];
  for (let i = 1; integer * i <= limit ; ++i ) multiples.push(integer * i);
  return multiples;
}
