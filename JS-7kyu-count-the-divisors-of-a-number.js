function getDivisorsCnt(n){
    let count = 0;
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            // If 'i' is a divisor, we count it once
            count++;
            // If 'n/i' is not equal to 'i', it is a distinct divisor, so we count it too
            if (n / i !== i) {
                count++;
            }
        }
    }
    return count;
}
