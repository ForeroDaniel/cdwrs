function toFreud(string) {
return !string ? '': 'sex '.repeat(string.split(' ').length).trim();
}
