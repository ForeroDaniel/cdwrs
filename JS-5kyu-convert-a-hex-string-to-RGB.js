function hexStringToRGB(hexString) {
    const r = parseInt(hexString.substring(1, 3), 16);
    const g = parseInt(hexString.substring(3, 5), 16);
    const b = parseInt(hexString.substring(5, 7), 16);
    return { r, g, b, }
}
