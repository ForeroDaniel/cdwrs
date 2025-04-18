function boredom(staff) {
    const scores = {
        'accounts': 1,
        'finance': 2,
        'canteen': 10,
        'regulation': 3,
        'trading': 6,
        'change': 6,
        'IS': 8,
        'retail': 5,
        'cleaning': 4,
        'pissing about': 25
    };
    
    let total = 0;
    for (const dept of Object.values(staff)) {
        total += scores[dept] || 0;
    }
    
    if (total >= 100) {
        return 'party time!!';
    } else if (total > 80) {
        return 'i can handle this';
    } else {
        return 'kill me now';
    }
}
