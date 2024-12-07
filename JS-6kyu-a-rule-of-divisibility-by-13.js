function thirt(n) {
    const remainders = [1, 10, 9, 12, 3, 4];

    const calculateSum = (num) => {
        return String(num)
            .split('')
            .reverse()
            .reduce((sum, digit, index) => sum + Number(digit) * remainders[index % remainders.length], 0);
    };

    let current = n;
    let next = calculateSum(current);

    while (next !== current) {
        current = next;
        next = calculateSum(current);
    }

    return current;
}
