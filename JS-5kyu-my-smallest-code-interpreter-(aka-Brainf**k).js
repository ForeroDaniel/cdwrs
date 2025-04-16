function brainLuck(code, input) {
    const bracketMap = buildBracketMap(code);
    const data = new Uint8Array(30000);
    let dp = 0;
    const inputBytes = Array.from(input, c => c.charCodeAt(0));
    let inputPtr = 0;
    let output = [];
    let ip = 0;

    while (ip < code.length) {
        const cmd = code[ip];
        switch (cmd) {
            case '>':
                dp++;
                break;
            case '<':
                dp--;
                break;
            case '+':
                data[dp]++;
                break;
            case '-':
                data[dp]--;
                break;
            case '.':
                output.push(String.fromCharCode(data[dp]));
                break;
            case ',':
                data[dp] = inputBytes[inputPtr];
                inputPtr++;
                break;
            case '[':
                if (data[dp] === 0) {
                    ip = bracketMap[ip];
                }
                break;
            case ']':
                if (data[dp] !== 0) {
                    ip = bracketMap[ip];
                }
                break;
        }
        ip++;
    }

    return output.join('');
}

function buildBracketMap(code) {
    const stack = [];
    const map = {};
    for (let i = 0; i < code.length; i++) {
        const c = code[i];
        if (c === '[') {
            stack.push(i);
        } else if (c === ']') {
            if (stack.length === 0) continue;
            const start = stack.pop();
            map[start] = i;
            map[i] = start;
        }
    }
    return map;
}
