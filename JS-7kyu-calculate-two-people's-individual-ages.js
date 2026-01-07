function getAges(sum, diff) {
    if (sum < 0 || diff < 0 || diff > sum) {
        return null;
    }

    const older = (sum + diff) / 2;
    const younger = (sum - diff) / 2;

    return [older, younger]
}
