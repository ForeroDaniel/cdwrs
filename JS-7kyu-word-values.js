function wordValue(list) {
    return list.map((str, index) => {
        const value = [...str.replace(/\s/g, '')]
            .map(char => char.charCodeAt(0) - 96)
            .reduce((sum, num) => sum + num, 0);
        return value * (index + 1);
    });
}
