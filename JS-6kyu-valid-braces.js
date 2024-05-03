function validBraces(braces){
  const stack = [];
    const map = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (let i = 0; i < braces.length; i++) {
        if (braces[i] === '(' || braces[i] === '{' || braces[i] === '[') {
            stack.push(braces[i]);
        } else {
            const last = stack.pop();
            if (braces[i] !== map[last]) {
                return false;
            }
        }
    }

    return stack.length === 0;
}
