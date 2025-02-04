function repeats(arr) {
    const freqMap = {};
    
    // Count the frequency of each number in the array
    for (let num of arr) freqMap[num] = (freqMap[num] || 0) + 1;
    
    // Sum the numbers that appear only once
    let sum = 0;
    for (let num in freqMap) if (freqMap[num] === 1) sum += Number(num);  // Convert the key back to a number
    
    return sum;
}
