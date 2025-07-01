function twosDifference(arr) {
    arr.sort((a, b) => a - b);
    const result = [];
    let left = 0;
    let right = 1;

    while (right < arr.length) {
        const diff = arr[right] - arr[left];
        if (diff === 2) {
            result.push([arr[left], arr[right]]);
            left++;
            right++;
        } else if (diff < 2) {
            right++;
        } else {
            left++;
        }
    }

    return result;
}
