function stat(str) {
    if (!str) return "";

    // Split into individual results
    const results = str.split(',').map(s => s.trim());

    // Convert each result to total seconds
    const totalSeconds = results.map(result => {
        const [h, m, s] = result.split('|').map(Number);
        return h * 3600 + m * 60 + s;
    });

    // Sort for median calculation
    totalSeconds.sort((a, b) => a - b);

    // Calculate range
    const range = Math.max(...totalSeconds) - Math.min(...totalSeconds);

    // Calculate average
    const average = totalSeconds.reduce((sum, sec) => sum + sec, 0) / totalSeconds.length;

    // Calculate median
    const mid = Math.floor(totalSeconds.length / 2);
    const median = totalSeconds.length % 2 !== 0
        ? totalSeconds[mid]
        : (totalSeconds[mid - 1] + totalSeconds[mid]) / 2;

    // Function to convert seconds to hh|mm|ss format
    function secToTime(sec) {
        const h = Math.floor(sec / 3600);
        const m = Math.floor((sec % 3600) / 60);
        const s = Math.floor(sec % 60);
        return `${String(h).padStart(2, '0')}|${String(m).padStart(2, '0')}|${String(s).padStart(2, '0')}`;
    }

    // Format the output
    return `Range: ${secToTime(range)} Average: ${secToTime(average)} Median: ${secToTime(median)}`;
}
