function SJF(jobs, index) {
    // Create a list of jobs with their original index
    let jobsWithIndex = jobs.map((job, idx) => ({job, idx}));

    // Sort jobs by duration (and preserve original order in case of tie)
    jobsWithIndex.sort((a, b) => a.job === b.job ? a.idx - b.idx : a.job - b.job);

    // To simulate job completion times
    let time = 0;  // Keeps track of current time
    for (let i = 0; i < jobsWithIndex.length; i++) {
        let currentJob = jobsWithIndex[i];
        
        // Increase time by the job's duration
        time += currentJob.job;

        // Check if this is the job we're interested in
        if (currentJob.idx === index) {
            return time;  // Return the time when the job at 'index' finishes
        }
    }
}
