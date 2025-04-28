function last(x) {
    // Split the string into an array of words
    return x.split(' ')
             // Sort based on last character
             .sort((a, b) => {
                 // Get last characters
                 const lastA = a[a.length - 1];
                 const lastB = b[b.length - 1];

                 // If last characters are same, maintain original order
                 if (lastA === lastB) return 0;

                 // Otherwise sort by last character
                 return lastA < lastB ? -1 : 1;
             });
}
