function isValidIP(ip) {
  // Split the input string by dots
    const parts = ip.split('.');
    
    // Check if there are exactly 4 parts
    if (parts.length !== 4) {
        return false;
    }
    
    for (const part of parts) {
        // Check if the part is numeric
        if (!/^\d+$/.test(part)) {
            return false;
        }
        
        // Check for leading zeros
        if (part.length > 1 && part.startsWith('0')) {
            return false;
        }
        
        // Convert to integer and check the range
        const num = parseInt(part, 10);
        if (num < 0 || num > 255) {
            return false;
        }
    }
    
    return true;
}
