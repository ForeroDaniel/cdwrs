function nthFibo(n) {
    if (n === 1) return 0;
    if (n === 2) return 1;
    
    let a = 0, b = 1;
    for (let i = 3; i <= n; i++) {
        let next = a + b;
        a = b;
        b = next;
    }
    return b;
}
