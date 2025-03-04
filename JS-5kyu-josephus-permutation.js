function josephus(arr,k){
    let result = [];
    let index = 0;  // Start from the first index of the array

    while (arr.length > 0) {
        // Calculate the index of the k-th person to remove, circularly
        index = (index + k - 1) % arr.length;
        
        // Push the person to the result array
        result.push(arr.splice(index, 1)[0]);
    }

    return result;
}
