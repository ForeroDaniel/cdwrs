function mirror(data) {
  const sorted = data.slice().sort((a,b) => a - b)
  const sortedInverted = sorted.slice().reverse().slice(1)
  
  return sorted.concat(sortedInverted)
}
