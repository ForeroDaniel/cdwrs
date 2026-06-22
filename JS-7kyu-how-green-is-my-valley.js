function makeValley(arr) {
    var leftWing = []
    var rightWing = []
    arr.sort((a, b) => b - a)
      .forEach((el, i) => i % 2 == 0 ? leftWing.push(el) : rightWing.unshift(el))
    
    return [...leftWing, ...rightWing]
}
