function parseMolecule(formula) {
    const stack = [];
    let current = {};
    let i = 0;

    while (i < formula.length) {
        if (formula[i] === '(' || formula[i] === '[' || formula[i] === '{') {
            stack.push(current);
            current = {};
            i++;
        } else if (formula[i] === ')' || formula[i] === ']' || formula[i] === '}') {
            i++;
            let num = 1;
            let numStr = '';
            while (i < formula.length && /\d/.test(formula[i])) {
                numStr += formula[i];
                i++;
            }
            if (numStr) num = parseInt(numStr, 10);
            const prev = stack.pop();
            for (const atom in current) {
                prev[atom] = (prev[atom] || 0) + current[atom] * num;
            }
            current = prev;
        } else {
            let element = formula[i];
            i++;
            while (i < formula.length && /[a-z]/.test(formula[i])) {
                element += formula[i];
                i++;
            }
            let numStr = '';
            while (i < formula.length && /\d/.test(formula[i])) {
                numStr += formula[i];
                i++;
            }
            const num = numStr ? parseInt(numStr, 10) : 1;
            current[element] = (current[element] || 0) + num;
        }
    }

    return current;
}
