function maxRot(n) {
    let str = n.toString();
    let rotations = [n];
    
    // Iterate through each possible rotation point
    // Stop at length-2 since last digit can't be rotated alone
    for (let i = 0; i < str.length - 1; i++) {
        // Keep first i digits, rotate the rest
        let fixedPart = str.slice(0, i);
        let toRotate = str.slice(i);
        
        // Rotate: take first digit of rotating part and move to end
        toRotate = toRotate.slice(1) + toRotate[0];
        
        // Combine and convert back to number
        str = fixedPart + toRotate;
        rotations.push(Number(str));
    }
    
    // Return the maximum value
    return Math.max(...rotations);
}
