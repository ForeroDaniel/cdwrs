function expand(expr) {
    let [f, a, x, b, n] = /^\((-?\d*)(.)([-+]\d+)\)\^(\d+)$/.exec(expr);
    a = !a ? 1 : a === '-' ? -1 : +a;
    b = +b;
    n = +n;
    f = Math.pow(a, n);
    if (!n) {
        return '1';
    } else if (!a) {
        return String(Math.pow(b, n));
    } else if (!b) {
        return f + x + (n > 1 ? '^' + n : '');
    } else {
        let result = '';
        for (let i = 0; i <= n; ++i) {
            if (f > 0 && i) result += '+';
            if (f < 0) result += '-';
            if (i || f*f > 1) result += Math.abs(f);
            if (i < n) result += x;
            if (i < n - 1) result += '^' + (n - i);
            f = f * (n - i) * b / a / (i + 1);
        }
        return result;
    }
}
