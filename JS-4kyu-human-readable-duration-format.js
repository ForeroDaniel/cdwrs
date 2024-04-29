function formatDuration(seconds) {
    if (seconds === 0) return "now";

    const time = {
        year: 365 * 24 * 60 * 60,
        day: 24 * 60 * 60,
        hour: 60 * 60,
        minute: 60,
        second: 1
    };

    let result = [];

    Object.keys(time).forEach(unit => {
        if (seconds >= time[unit]) {
            const value = Math.floor(seconds / time[unit]);
            result.push(value + " " + (value > 1 ? unit + "s" : unit));
            seconds -= value * time[unit];
        }
    });

    return result.length > 1 ? result.join(", ").replace(/,([^,]*)$/, " and$1") : result[0];
}
