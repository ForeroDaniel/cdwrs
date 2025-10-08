function getAverageAge(list) {
 return Math.round(list.reduce((acc, e) => e.age + acc, 0) / list.length)
}
