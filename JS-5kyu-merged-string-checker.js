function isMerge(s, part1, part2) {
  if (s.length === 0) return part1.length === 0 && part2.length === 0;

  // Check if the first character of 's' matches the first character of 'part1'.
  const fromPart1 = s[0] === part1[0];

  // Check if the first character of 's' matches the first character of 'part2'.
  const fromPart2 = s[0] === part2[0];

  // If the first character of 's' matches a character from part1,
  // we recursively check the rest of the strings.
  if (fromPart1 && isMerge(s.slice(1), part1.slice(1), part2)) return true;


  // If the first character of 's' matches a character from part2,
  // we recursively check the rest of the strings.
  if (fromPart2 && isMerge(s.slice(1), part1, part2.slice(1))) return true;

  return false;
}
