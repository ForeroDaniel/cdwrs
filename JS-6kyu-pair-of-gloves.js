function numberOfPairs(gloves){
    const colorCounts = {};
    for (const color of gloves) {
        if (colorCounts[color]) {
            colorCounts[color]++;
        } else {
            colorCounts[color] = 1;
        }
    }
    let totalPairs = 0;
    for (const color in colorCounts) {
        totalPairs += Math.floor(colorCounts[color] / 2);
    }
    return totalPairs;
}
