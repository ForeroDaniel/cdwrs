function dominator(arr) {
    const counts = {};
    const threshold = arr.length / 2;

    for (const num of arr) {
        // Increment the count for the current number
        counts[num] = (counts[num] || 0) + 1;

        // Check if the current number is the dominator
        if (counts[num] > threshold) {
            return num;
        }
    }

    // If no dominator is found after checking all elements
    return -1;
}
