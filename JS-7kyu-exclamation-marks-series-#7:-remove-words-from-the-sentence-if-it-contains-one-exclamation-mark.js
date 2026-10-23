function remove(string) {
    return string.split(' ').filter(word => (word.match(/!/g) || []).length !== 1).join(' ');
}
