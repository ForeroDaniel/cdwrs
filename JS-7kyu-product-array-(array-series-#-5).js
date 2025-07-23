function productArray(numbers){
    const n = numbers.length;

    let totalProduct = 1;
    for (let i = 0; i < n; i++) totalProduct *= numbers[i];

    const prod = new Array(n); 
    for (let i = 0; i < n; i++) prod[i] = totalProduct / numbers[i];

    return prod;
};
