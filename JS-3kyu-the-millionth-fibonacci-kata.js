function fib(n) {
    if (n === 0) return 0n;
    if (n === 1 || n === -1) return 1n;

    const absN = Math.abs(n);
    const result = fastDoubling(absN);

    if (n < 0 && absN % 2 === 0) {
        return -result;
    } else {
        return result;
    }
}

function fastDoubling(n) {
    function helper(k) {
        if (k === 0) return [0n, 1n];
        const [a, b] = helper(Math.floor(k / 2));
        const c = a * (2n * b - a);
        const d = a * a + b * b;
        return k % 2 === 0 ? [c, d] : [d, c + d];
    }
    return helper(n)[0];
}
