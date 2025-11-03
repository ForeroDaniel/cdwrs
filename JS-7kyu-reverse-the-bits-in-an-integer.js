function reverseBits(n) {
    const binaryReversed = n.toString(2).split('').reverse().join('');
    return parseInt(binaryReversed, 2)
}
