function movie(card, ticket, perc) {
    let systemBTotal = card;  // Initialize with the card price
    let currentTerm = ticket * perc;  // First ticket cost in System B
    let n = 1;
    
    while (true) {
        systemBTotal += currentTerm;
        const systemA = ticket * n;
        if (Math.ceil(systemBTotal) < systemA) {
            return n;
        }
        currentTerm *= perc;  // Update for the next iteration's term
        n++;
    }
}
