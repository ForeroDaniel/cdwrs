function menFromBoys(arr) {
    const evens = new Set();
    const odds = new Set();
    
    for (const num of arr) {
        if (num % 2 === 0) {
            evens.add(num);
        } else {
            odds.add(num);
        }
    }
    
    const sortedEvens = Array.from(evens).sort((a, b) => a - b);
    const sortedOdds = Array.from(odds).sort((a, b) => b - a);
    
    return [...sortedEvens, ...sortedOdds];
}
