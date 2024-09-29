function pickPeaks(arr) {
    let pos = [];
    let peaks = [];

    // We iterate over the array starting from the second element and ending at the second last element.
    for (let i = 1; i < arr.length - 1; i++) {
        // Check for plateaus
        if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
            pos.push(i);
            peaks.push(arr[i]);
        } else if (arr[i] > arr[i - 1] && arr[i] === arr[i + 1]) {
            // Handle plateaus
            let j = i;
            while (j < arr.length - 1 && arr[j] === arr[j + 1]) {
                j++;
            }
            if (j < arr.length - 1 && arr[j] > arr[j + 1]) {
                pos.push(i);
                peaks.push(arr[i]);
            }
            // Skip to the end of the plateau
            i = j;
        }
    }

    return { pos, peaks };
}
