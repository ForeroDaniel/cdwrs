function specialNumber(n) {
    return String(n).split('').every(digit => '012345'.includes(digit)) 
        ? "Special!!" 
        : "NOT!!";
}
