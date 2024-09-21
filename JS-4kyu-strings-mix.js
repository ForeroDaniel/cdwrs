function mix(s1, s2) {
    // Helper function to count lowercase letters
    function countLetters(s) {
        const counts = {};
        s.replace(/[^a-z]/g, '').split('').forEach(char => {
            counts[char] = counts[char] ? counts[char] + 1 : 1;
        });
        return counts;
    }
    
    const counts1 = countLetters(s1);
    const counts2 = countLetters(s2);
    const result = [];
    
    // Collect results for letters that have max frequency > 1 in either s1 or s2
    for (let char of 'abcdefghijklmnopqrstuvwxyz'.split('')) {
        const countIn1 = counts1[char] || 0;
        const countIn2 = counts2[char] || 0;
        
        if (countIn1 > 1 || countIn2 > 1) {
            let prefix = '';
            if (countIn1 > countIn2) {
                prefix = '1:';
                result.push({ str: prefix + char.repeat(countIn1), len: countIn1 });
            } else if (countIn2 > countIn1) {
                prefix = '2:';
                result.push({ str: prefix + char.repeat(countIn2), len: countIn2 });
            } else { // countIn1 === countIn2
                prefix = '=:';
                result.push({ str: prefix + char.repeat(countIn1), len: countIn1 });
            }
        }
    }
    
    // Sort results: first by length (descending), then lexicographically (ascending)
    result.sort((a, b) => b.len - a.len || (a.str > b.str ? 1 : -1));
    
    // Join sorted results with '/'
    return result.map(obj => obj.str).join('/');
}
