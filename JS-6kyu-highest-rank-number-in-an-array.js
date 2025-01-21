function highestRank(arr) {
    // Create an object to store the frequency of each number
    const frequency = {};

    // Populate the frequency object
    arr.forEach(num => {
        frequency[num] = (frequency[num] || 0) + 1;
    });

    // Initialize variables to track the most frequent number
    let mostFrequentNumber = arr[0];  // Start with the first element as the initial most frequent
    let maxFrequency = frequency[mostFrequentNumber];

    // Loop through the frequency object to find the most frequent number
    for (let num in frequency) {
        // If the current frequency is greater, or if it's the same but the number is larger, update
        if (frequency[num] > maxFrequency || 
           (frequency[num] === maxFrequency && Number(num) > mostFrequentNumber)) {
            mostFrequentNumber = num;
            maxFrequency = frequency[num];
        }
    }

    // Convert to number and return the result
    return Number(mostFrequentNumber);
}
