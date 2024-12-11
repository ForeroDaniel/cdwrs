function int32ToIp(int){
    // Extract each octet using bitwise operations
    const octet1 = (int >>> 24) & 255; // First octet
    const octet2 = (int >>> 16) & 255; // Second octet
    const octet3 = (int >>> 8) & 255;  // Third octet
    const octet4 = int & 255;           // Fourth octet

    // Combine the octets into an IPv4 string
    return `${octet1}.${octet2}.${octet3}.${octet4}`;
}
