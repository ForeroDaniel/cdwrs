function average(scores) {
    return Math.round(scores.reduce((acc, score) => acc + score, 0) / scores.length)
}
