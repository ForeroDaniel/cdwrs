function absentVowel(x) {
    const vowels = 'aeiou';
    const lowerX = x.toLowerCase();
    
    return [...vowels].findIndex(v => !lowerX.includes(v));
}
