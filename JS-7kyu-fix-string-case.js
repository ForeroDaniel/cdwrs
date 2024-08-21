function solve(s){
  const count = { uppercase: 0, lowercase: 0 };
  s.split('').forEach(x => {
    return x === x.toUpperCase() ? 
    ++count.uppercase : 
    ++count.lowercase
  } )
  console.log(count)
  return count.uppercase > count.lowercase ? s.toUpperCase() : s.toLowerCase()
}
