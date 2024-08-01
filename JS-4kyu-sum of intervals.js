function sumIntervals(intervals) {
  let mergedIntervals = [];
    intervals.sort((a, b) => a[0] - b[0]);
    
    for (let interval of intervals) {
        if (mergedIntervals.length === 0 || interval[0] > mergedIntervals[mergedIntervals.length - 1][1]) {
            mergedIntervals.push(interval);
        } else if (interval[1] > mergedIntervals[mergedIntervals.length - 1][1]) {
            mergedIntervals[mergedIntervals.length - 1][1] = interval[1];
        }
    }
    
    return mergedIntervals.reduce((acc, interval) => acc + (interval[1] - interval[0]), 0);
}
