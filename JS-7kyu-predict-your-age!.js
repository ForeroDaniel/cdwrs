function predictAge(...ages){
  return Math.floor(Math.sqrt([...ages].reduce((acc, x) => acc + (x ** 2) , 0)) / 2)
}
