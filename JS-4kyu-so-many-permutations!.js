function permutations(input) {
	 let result = [];

    if (input.length === 1) {
        return [input];
    }

    for (let i = 0; i < input.length; i++) {
        const char = input[i];
        const remainingChars = input.slice(0, i) + input.slice(i + 1);
        const innerPermutations = permutations(remainingChars);

        for (let j = 0; j < innerPermutations.length; j++) {
            result.push(char + innerPermutations[j]);
        }
    }

    return [...new Set(result)];
}
