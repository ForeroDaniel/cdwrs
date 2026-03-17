function playerManager(players) {
  // your code
  // array.length / 2, creates empty objects
  if (players === '' || players === null) {
    return []
  }
  else {
  var arr = players.split(', ')
  var result = []
  // for loop of length
  for (i=0; i<arr.length; i++) {
      result.push({'player': arr[i], 'contact': parseInt(arr[i+1])})
      i = i+1
  }
  return result
  //pushes into i%2 == 0  and i%2 === 1 in object
  }
}
