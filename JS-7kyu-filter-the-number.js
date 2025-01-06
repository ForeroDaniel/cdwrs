function filterString(value) {
    const digits = value.replace(/\D/g, '');  
    return Number(digits);
}
