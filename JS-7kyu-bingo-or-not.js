function bingo(a) {
  return [2,9,14,7,15].every(x => a.includes(x)) ? "WIN" : "LOSE"
}
