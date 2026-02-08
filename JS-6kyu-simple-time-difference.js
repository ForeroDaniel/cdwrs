function solve(arr){
    var sortedAsMinutes = arr.map(x => timeToMinutes(x)).sort((a, b) => a - b);
    sortedAsMinutes.push(sortedAsMinutes[0] + 60 * 24);
    return minutesToTime(Math.max.apply(null, sortedAsMinutes.map((x, i, a) => { return i < a.length - 1 ? a[i + 1] - x : 0 })) - 1);
}

function timeToMinutes(time) {
    var tokens = time.split(":");
    return parseInt(tokens[0], 10) * 60 + parseInt(tokens[1], 10);
}

function minutesToTime(minutes) {
    return ("" + Math.floor(minutes / 60)).padStart(2, "0") + ":" + ("" + minutes % 60).padStart(2, "0");
}
