function whatCentury(year) {
    const num = parseInt(year, 10);
    let century = Math.ceil(num / 100);
    let suffix;
    
    // Handle special cases for 11, 12, 13
    if (century % 100 >= 11 && century % 100 <= 13) {
        suffix = 'th';
    } else {
        switch (century % 10) {
            case 1:
                suffix = 'st';
                break;
            case 2:
                suffix = 'nd';
                break;
            case 3:
                suffix = 'rd';
                break;
            default:
                suffix = 'th';
        }
    }
    
    return century + suffix;
}
