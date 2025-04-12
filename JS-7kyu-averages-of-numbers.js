function averages(numbers) {
    if (numbers === null || !Array.isArray(numbers) || numbers.length < 2) {
        return [];
    }
    const averages = [];
    for (let i = 0; i < numbers.length - 1; i++) {
        const current = numbers[i];
        const next = numbers[i + 1];
        const average = (current + next) / 2;
        averages.push(average);
    }
    return averages;
}
