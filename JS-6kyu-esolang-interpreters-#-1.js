function myFirstInterpreter(code) {
    let memory = 0;
    let output = '';
    for (const char of code) {
        if (char === '+') {
            memory = (memory + 1) % 256;
        } else if (char === '.') {
            output += String.fromCharCode(memory);
        }
    }
    return output;
}
