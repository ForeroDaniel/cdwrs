function outed(meet, boss) {
    let total = 0;
    const count = Object.keys(meet).length;
    for (const key in meet) {
        if (key === boss) {
            total += meet[key] * 2;
        } else {
            total += meet[key];
        }
    }
    const average = total / count;
    return average <= 5 ? 'Get Out Now!' : 'Nice Work Champ!';
}
