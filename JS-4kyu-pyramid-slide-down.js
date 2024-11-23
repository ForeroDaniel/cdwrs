function longestSlideDown(pyramid) {
    // Start from the second last row of the pyramid and work upwards
    for (let row = pyramid.length - 2; row >= 0; row--) {
        for (let col = 0; col <= row; col++) {
            // Update the current position with the maximum sum possible from below
            pyramid[row][col] += Math.max(pyramid[row + 1][col], pyramid[row + 1][col + 1]);
        }
    }
    // The top element now contains the maximum slide down sum
    return pyramid[0][0];
}
