function beggars(values, n) {
    if (n <= 0) return [];
    const result = new Array(n).fill(0);
    for (let i = 0; i < values.length; i++) {
        const beggarIndex = i % n;
        result[beggarIndex] += values[i];
    }
    return result;
}
