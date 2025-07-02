function ipToInt32(ip) {
    const octets = ip.split('.').map(Number);
    return octets[0] * 16777216 +  // 256^3
           octets[1] * 65536 +     // 256^2
           octets[2] * 256 +       // 256^1
           octets[3];              // 256^0
}
