const search = (budget, prices) => prices.filter(v => v <= budget).sort((a, b) => a - b).toString();
