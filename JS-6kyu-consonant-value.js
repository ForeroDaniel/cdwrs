function solve(s) {
  const getValue = (char) => char.charCodeAt(0) - 96;

  const consonantValues = s.split(/[aeiou]/).map(substring =>
    [...substring].reduce((sum, char) => sum + getValue(char), 0)
  );

  return Math.max(0, ...consonantValues); // Return 0 if no consonants
}
