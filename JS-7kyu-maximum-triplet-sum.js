function maxTriSum(numbers) {
    let uniqueNumbers = [...new Set(numbers)];
    
    return uniqueNumbers.sort((a, b) => b - a)
                        .slice(0, 3)
                        .reduce((acc, x) => acc + x, 0)
}
