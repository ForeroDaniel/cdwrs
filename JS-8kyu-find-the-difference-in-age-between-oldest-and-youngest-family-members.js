function differenceInAges(ages){
  const youngest = Math.min(...ages)
  const oldest = Math.max(...ages)
  return [youngest, oldest, oldest - youngest];
}
