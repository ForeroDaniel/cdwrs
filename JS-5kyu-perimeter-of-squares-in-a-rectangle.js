function perimeter(n) {
    // Initialize Fibonacci numbers
    let fib = [1, 1];
    let totalPerimeter = 0;
    
    // Compute Fibonacci sequence up to F(n)
    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i-1] + fib[i-2];
    }
    
    // Calculate total perimeter
    for (let i = 0; i <= n; i++) {
        totalPerimeter += 4 * fib[i];
    }
    
    return totalPerimeter;
}
