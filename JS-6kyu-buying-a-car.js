function nbMonths(startPriceOld, startPriceNew, savingPerMonth, percentLossByMonth) {
    let months = 0;
    let savings = 0;
    let currentPriceOld = startPriceOld;
    let currentPriceNew = startPriceNew;
    
    if (currentPriceOld >= currentPriceNew) {
        const leftover = currentPriceOld - currentPriceNew;
        return [0, Math.round(leftover)];
    }
    
    while (true) {
        months++;
        if (months % 2 === 0) {
            percentLossByMonth += 0.5;
        }
        
        currentPriceOld *= (100 - percentLossByMonth) / 100;
        currentPriceNew *= (100 - percentLossByMonth) / 100;
        savings += savingPerMonth;
        
        const total = savings + currentPriceOld;
        if (total >= currentPriceNew) {
            const leftover = total - currentPriceNew;
            return [months, Math.round(leftover)];
        }
    }
}
