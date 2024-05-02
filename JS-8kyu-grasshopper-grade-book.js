function getGrade (s1, s2, s3) {
  const score = (s1 + s2 + s3) / 3
  return score >= 90 ? 'A' : 
         score >= 80 ? 'B' : 
         score >= 70 ? 'C' : 
         score >= 60 ? 'D' : 'F'
}
