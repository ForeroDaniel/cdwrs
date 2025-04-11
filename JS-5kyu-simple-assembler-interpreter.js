function simple_assembler(program) {
    const registers = {};
    let ip = 0;
    const n = program.length;

    const getValue = (arg) => {
        if (/^-?\d+$/.test(arg)) {
            return parseInt(arg, 10);
        } else {
            return registers[arg];
        }
    };

    while (ip >= 0 && ip < n) {
        const instruction = program[ip];
        const parts = instruction.split(' ');
        const cmd = parts[0];

        switch (cmd) {
            case 'mov': {
                const x = parts[1];
                const y = parts[2];
                registers[x] = getValue(y);
                ip++;
                break;
            }
            case 'inc': {
                const x = parts[1];
                registers[x]++;
                ip++;
                break;
            }
            case 'dec': {
                const x = parts[1];
                registers[x]--;
                ip++;
                break;
            }
            case 'jnz': {
                const x = parts[1];
                const y = parts[2];
                const xVal = getValue(x);
                const yVal = getValue(y);
                if (xVal !== 0) {
                    ip += yVal;
                } else {
                    ip++;
                }
                break;
            }
            default:
                ip++;
        }
    }

    return registers;
}
