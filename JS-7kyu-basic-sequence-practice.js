function sumOfN(n) {
    const length = Math.abs(n) + 1;
    const series = [];
    let sum = 0;
    const sign = n < 0 ? -1 : 1;
    
    for (let i = 0; i < length; i++) {
        sum += i;
        series.push(sum * sign);
    }
    
    return series;
}
