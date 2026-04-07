function wordSearch(query, seq){
  query = query.toLowerCase()
  const arr = seq.filter(e => e.toLowerCase().includes(query))
  return arr.length ? arr : ['Empty']
}
