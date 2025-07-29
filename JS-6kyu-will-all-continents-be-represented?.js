function allContinents(list) {
    const requiredContinents = new Set(['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']);
    const presentContinents = new Set();
    
    for (const dev of list) presentContinents.add(dev.continent);
    
    for (const continent of requiredContinents) {
        if (!presentContinents.has(continent)) return false;
    }
    
    return true;
}
