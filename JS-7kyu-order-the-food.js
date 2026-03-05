function orderFood(list) {
  return list.reduce((acc, x) => {
    acc[x.meal] = (acc[x.meal] || 0) + 1
    return acc
  }, {})
}
