function sumConsecutives(arr) {
    return arr.reduce((acc, val, i) => (i > 0 && val === arr[i - 1] ? (acc[acc.length - 1] += val, acc) : [...acc, val]), [])
}
