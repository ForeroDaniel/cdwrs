function spoonerize(words) {
    const [A, B] = words.split(' ')
    return `${B[0] + A.slice(1)} ${A[0] + B.slice(1)}`
}
