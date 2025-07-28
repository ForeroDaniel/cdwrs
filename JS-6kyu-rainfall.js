/**
 * Helper function to extract rainfall data for a specific town from the given string.
 * @param {string} town The name of the town to search for.
 * @param {string} strng The string containing rainfall records for multiple towns.
 * @returns {number[] | null} An array of rainfall values (numbers) for the town,
 *                            or null if the town is not found in the string or has no valid records.
 */
function getRainfallData(town, strng) {
    // Split the main string into individual town records based on newline.
    const records = strng.split('\n');

    for (const record of records) {
        // Each record is expected to be in the format "TownName:Jan 48.0,Feb 38.9,..."
        const parts = record.split(':');

        // Ensure we have both town name and data parts.
        if (parts.length === 2) {
            const townName = parts[0];
            const rainfallString = parts[1];

            // Check if this record belongs to the requested town.
            if (townName === town) {
                // Split the rainfall data string by comma to get individual month entries.
                // Each item is like "Jan 48.0".
                const values = rainfallString.split(',').map(item => {
                    // Extract the numeric part (e.g., "48.0" from "Jan 48.0").
                    // split(' ')[1] gets the second part after splitting by space.
                    const valuePart = item.split(' ')[1];
                    // Convert the string part to a floating-point number.
                    return parseFloat(valuePart);
                });

                // Filter out any NaN values that might result from malformed or empty month entries.
                // If rainfallString was empty, `split(',')` yields `[""]`, `map` yields `[NaN]`,
                // and `filter` correctly results in an empty array `[]`.
                return values.filter(value => !isNaN(value));
            }
        }
    }

    // If the loop completes, it means the specified town was not found in the string.
    return null;
}

/**
 * Calculates the mean (average) of rainfall for a given town.
 * @param {string} town The name of the town.
 * @param {string} strng The string containing rainfall records.
 * @returns {number} The average rainfall, or -1 if the town is not found or has no valid records.
 */
function mean(town, strng) {
    const rainfallData = getRainfallData(town, strng);

    // If rainfallData is null (town not found) or an empty array (no valid records), return -1.
    if (rainfallData === null || rainfallData.length === 0) {
        return -1;
    }

    // Calculate the sum of all rainfall values.
    const sum = rainfallData.reduce((acc, val) => acc + val, 0);

    // The mean is the sum divided by the number of values.
    return sum / rainfallData.length;
}

/**
 * Calculates the variance of rainfall for a given town.
 * @param {string} town The name of the town.
 * @param {string} strng The string containing rainfall records.
 * @returns {number} The variance of rainfall, or -1 if the town is not found or has no valid records.
 */
function variance(town, strng) {
    const rainfallData = getRainfallData(town, strng);

    // If rainfallData is null (town not found) or an empty array (no valid records), return -1.
    if (rainfallData === null || rainfallData.length === 0) {
        return -1;
    }

    const n = rainfallData.length;

    // Calculate the mean of the rainfall data. We calculate it here directly
    // from the `rainfallData` array to avoid re-parsing the `strng`.
    const sum = rainfallData.reduce((acc, val) => acc + val, 0);
    const avg = sum / n;

    // Calculate the sum of squared differences from the mean.
    // Variance = Σ(xi - mean)^2 / N
    let sumOfSquaredDifferences = 0;
    for (const val of rainfallData) {
        sumOfSquaredDifferences += Math.pow(val - avg, 2);
    }

    // Return the variance.
    return sumOfSquaredDifferences / n;
}
