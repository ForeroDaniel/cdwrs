function orderWeight(str) {
    return str.split(' ')
        .sort(function(a, b) {
            let sumA = a.split('').reduce((acc, x) => parseInt(x) + acc, 0);
            let sumB = b.split('').reduce((acc, x) => parseInt(x) + acc, 0);
            
            // If the sums are equal, sort by string comparison
            if (sumA === sumB) {
                if (a < b) return -1;
                if (a > b) return 1;
                return 0;
            }
            
            // Otherwise, sort by the sum of digits
            return sumA - sumB;
        })
        .join(' ');
}
