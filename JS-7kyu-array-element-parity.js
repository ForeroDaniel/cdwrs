function solve(arr) {
    const positive = arr.filter(x => x > 0);
    const negative = arr.filter(x => x < 0);
    
    // Check positive numbers that don't have negative counterparts
    for (let num of positive) {
        if (!negative.includes(-num)) return num;
    }
    
    // Check negative numbers that don't have positive counterparts
    for (let num of negative) {
        const absNum = Math.abs(num);
        if (!positive.includes(absNum)) return num;
    }
}
