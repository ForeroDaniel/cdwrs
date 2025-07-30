function deepCount(arr) {
    return arr.reduce((count, element) => {
        return count + (Array.isArray(element) ? deepCount(element) : 0);
    }, arr.length);
}
