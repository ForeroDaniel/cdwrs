function min(arr, mode) {
    const minValue = Math.min(...arr);  // Find the smallest value in the array

    if (mode === "value") {
        return minValue;  // Return the smallest value
    } else if (mode === "index") {
        return arr.indexOf(minValue);  // Return the index of the smallest value
    }
}
