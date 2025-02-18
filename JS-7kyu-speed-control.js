function gps(s, x) {
    if (x.length <= 1) return 0; // No movement

    let maxSpeed = 0;

    // Loop through the distances to compute the average speed for each section
    for (let i = 1; i < x.length; i++) {
        // Calculate the distance difference between consecutive points
        let deltaDistance = x[i] - x[i - 1];

        // Calculate the speed in distance units per hour
        let speedHourly = (3600 * deltaDistance) / s;

        // Update the max speed if the current speed is greater
        if (speedHourly > maxSpeed) maxSpeed = speedHourly;
    }

    // Return the floor of the maximum speed
    return Math.floor(maxSpeed);
}
