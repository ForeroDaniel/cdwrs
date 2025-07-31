function shiftedDiff(first, second) {
    if (first.length !== second.length) return -1;
    if (first === second) return 0;
    const rotations = Array.from({ length: first.length - 1 }, (_, shift) => {
        const shiftAmount = shift + 1;
        return first.slice(-shiftAmount) + first.slice(0, -shiftAmount);
    });
    const matchIndex = rotations.findIndex(rotated => rotated === second);
    return matchIndex !== -1 ? matchIndex + 1 : -1;
}
