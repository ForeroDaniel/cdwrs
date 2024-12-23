function partlist(arr) {
    const result = [];
    
    for (let i = 1; i < arr.length; i++) {
        // Split the array into two parts
        const part1 = arr.slice(0, i).join(' '); // Join elements of the first part
        const part2 = arr.slice(i).join(' ');    // Join elements of the second part
        result.push([part1, part2]);              // Push the pair into the result
    }
    
    return result;
}
