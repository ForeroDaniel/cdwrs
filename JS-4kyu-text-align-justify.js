function justify(text, width) {
    // Split text into words, filtering out empty strings that result from multiple spaces.
    // This interpretation of "word" aligns with typical text processing and rules like
    // "lines should end with a word".
    const words = text.split(' ').filter(Boolean);

    // If there are no actual words (e.g., empty input or input with only spaces),
    // return an empty string.
    if (words.length === 0) {
        return "";
    }

    const lines = [];
    let currentLineWords = [];
    // currentLineLength tracks the length of words currently in currentLineWords
    // plus the minimum single spaces required between them.
    let currentLineLength = 0;

    for (const word of words) {
        // The problem states "The longest word will never be greater than this width."
        // This implies that a single word, when starting a new line, will always fit.

        if (currentLineWords.length === 0) {
            // This is the first word for the current (potential) line.
            currentLineWords.push(word);
            currentLineLength = word.length;
        } else {
            // Check if adding the new word (plus a preceding space) would exceed the width.
            if (currentLineLength + 1 + word.length <= width) {
                // Word fits; add it to the current line.
                currentLineWords.push(word);
                currentLineLength += (1 + word.length);
            } else {
                // Word does not fit; finalize the current line and start a new one.
                lines.push(currentLineWords);
                currentLineWords = [word];
                currentLineLength = word.length;
            }
        }
    }

    // Add the last line being built to the list of lines.
    // This check is technically redundant if words.length > 0 initially,
    // as currentLineWords will always contain the unprocessed words.
    if (currentLineWords.length > 0) {
        lines.push(currentLineWords);
    }

    const resultLines = [];
    for (let i = 0; i < lines.length; i++) {
        const lineWordsArray = lines[i];
        const isLastLine = (i === lines.length - 1);
        const numWordsInLine = lineWordsArray.length;

        // Calculate the sum of the lengths of the words themselves in the current line.
        const wordsOnlyLength = lineWordsArray.reduce((sum, w) => sum + w.length, 0);

        if (isLastLine || numWordsInLine === 1) {
            // For the last line or a line with only one word:
            // - Do not justify.
            // - Join words with a single space.
            // This also handles the "Lines with one word do not need gaps" rule correctly.
            resultLines.push(lineWordsArray.join(' '));
        } else {
            // This line needs to be justified.
            // numWordsInLine will be > 1, so numGaps will be >= 1.
            const numGaps = numWordsInLine - 1;
            const totalSpacesToDistribute = width - wordsOnlyLength;

            // Calculate base number of spaces for each gap and any extra spaces.
            const baseSpacesPerGap = Math.floor(totalSpacesToDistribute / numGaps);
            let remainingExtraSpaces = totalSpacesToDistribute % numGaps;

            let justifiedLineStr = "";
            for (let j = 0; j < numWordsInLine; j++) {
                justifiedLineStr += lineWordsArray[j];
                if (j < numGaps) { // If not the last word, add spaces after it.
                    let spacesForThisGap = baseSpacesPerGap;
                    if (remainingExtraSpaces > 0) {
                        // Distribute extra spaces one by one to the leftmost gaps
                        // to make "Large gaps go first".
                        spacesForThisGap++;
                        remainingExtraSpaces--;
                    }
                    justifiedLineStr += ' '.repeat(spacesForThisGap);
                }
            }
            resultLines.push(justifiedLineStr);
        }
    }

    // Join all processed lines with newline characters.
    // The rule "Last line should not terminate in '\n'" is handled by join,
    // as it only places separators *between* elements.
    return resultLines.join('\n');
}
