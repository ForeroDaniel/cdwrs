function score(dice) {
    const counts = Array(7).fill(0);

    dice.forEach((die) => {
        counts[die]++;
    });

    const specificCombinations = {
        1: Math.floor(counts[1] / 3) * 1000 + (counts[1] % 3) * 100,
        2: counts[2] >= 3 ? 200 : 0,
        3: counts[3] >= 3 ? 300 : 0,
        4: counts[4] >= 3 ? 400 : 0,
        5: counts[5] >= 3 ? 500 : counts[5] * 50,
        6: counts[6] >= 3 ? 600 : 0,
    };

    // Calculate total score by summing up all scores
    const totalScore = Object.values(specificCombinations).reduce((acc, score) => acc + score, 0);

    return totalScore;
}
