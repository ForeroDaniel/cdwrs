function interpreter(code, tape) {
    // 1. Initialize tape: Convert tape string to an array of numbers (0s and 1s).
    const tapeArray = tape.split('').map(Number);
    const tapeLength = tapeArray.length;

    // 2. Initialize data pointer (dp): Starts at the leftmost cell.
    let dataPointer = 0;

    // 3. Initialize instruction pointer (ip): Starts at the beginning of the program.
    let instructionPointer = 0;

    // 4. Pre-compute bracket jump map:
    // This map stores the index of the matching bracket for each '[' or ']'.
    // e.g., bracketMap[index_of_opening_bracket] = index_of_closing_bracket
    //       bracketMap[index_of_closing_bracket] = index_of_opening_bracket
    const bracketMap = {};
    const bracketStack = []; // Used to find matching '[' for ']'

    for (let i = 0; i < code.length; i++) {
        const char = code[i];
        if (char === '[') {
            bracketStack.push(i);
        } else if (char === ']') {
            if (bracketStack.length === 0) {
                // This indicates a malformed program (unmatched ']')
                // For this problem, we'll assume valid bracket pairing in the code.
                // In a real-world scenario, you might throw an error.
                console.error("Malformed Smallfuck code: Unmatched ']' at index", i);
                return tapeArray.join(''); // Or throw an error
            }
            const openBracketIndex = bracketStack.pop();
            bracketMap[openBracketIndex] = i;
            bracketMap[i] = openBracketIndex;
        }
    }

    // If stack is not empty, it means unmatched '['
    if (bracketStack.length > 0) {
        console.error("Malformed Smallfuck code: Unmatched '[' at indices", bracketStack);
        return tapeArray.join(''); // Or throw an error
    }

    // 5. Start main execution loop:
    // The loop continues as long as:
    // - There are commands left to execute (instructionPointer < code.length)
    // - The data pointer is within the tape's bounds (dataPointer >= 0 && dataPointer < tapeLength)
    while (instructionPointer < code.length && dataPointer >= 0 && dataPointer < tapeLength) {
        const command = code[instructionPointer];

        switch (command) {
            case '>':
                dataPointer++;
                break;
            case '<':
                dataPointer--;
                break;
            case '*':
                // Flip the bit at the current cell
                if (dataPointer >= 0 && dataPointer < tapeLength) { // Double check bounds for safety
                    tapeArray[dataPointer] = 1 - tapeArray[dataPointer];
                }
                break;
            case '[':
                // If the value at the current cell is 0, jump past matching ']'
                if (tapeArray[dataPointer] === 0) {
                    instructionPointer = bracketMap[instructionPointer];
                }
                break;
            case ']':
                // If the value at the current cell is non-zero (i.e., 1), jump back to matching '['
                if (tapeArray[dataPointer] === 1) {
                    instructionPointer = bracketMap[instructionPointer];
                }
                break;
            // Default case handles non-command characters; they are simply ignored.
            default:
                break;
        }
        // Move to the next instruction unless a jump occurred (which already updated ip)
        // This logic is slightly tricky: if a jump *did* occur, instructionPointer is already at the target bracket.
        // We need to advance past that target bracket.
        // If no jump, we just advance by 1.
        if (command === '[' && tapeArray[dataPointer] === 0) {
            // If we jumped forward, we need to land *after* the ']'
            instructionPointer++;
        } else if (command === ']' && tapeArray[dataPointer] === 1) {
            // If we jumped backward, we need to land *after* the '['
            instructionPointer++;
        } else {
            // For all other commands, or if a conditional jump didn't happen, just move to the next instruction.
            instructionPointer++;
        }
    }

    // 6. Return final tape state: Convert tape array back to a string.
    return tapeArray.join('');
}
