function triangleType(a, b, c) {
  // Sort sides to ensure s1 <= s2 <= s3, simplifying checks.
  const [s1, s2, s3] = [a, b, c].sort((x, y) => x - y);

  // Return 0 if sides cannot form a valid triangle (e.g., non-positive side, or sum of two sides <= third).
  if (s1 <= 0 || s1 + s2 <= s3) {
    return 0;
  }

  // Calculate squares for Pythagorean theorem application.
  const s1Sq = s1 * s1;
  const s2Sq = s2 * s2;
  const s3Sq = s3 * s3;

  // Classify triangle based on the relationship between the sum of squares of the two shorter sides
  if (s1Sq + s2Sq === s3Sq) {
    return 2; // Right triangle (a^2 + b^2 = c^2)
  } else if (s1Sq + s2Sq > s3Sq) {
    return 1; // Acute triangle (a^2 + b^2 > c^2)
  } else {
    return 3; // Obtuse triangle (a^2 + b^2 < c^2)
  }
}
