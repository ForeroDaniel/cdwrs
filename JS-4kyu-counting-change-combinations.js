function countChange(money, coins) {
    let numberOfWays = new Array(money + 1).fill(0);
    numberOfWays[0] = 1; // Base case: 1 way to make 0 money

    for (let coin of coins) {
        for (let amount = coin; amount <= money; amount++) {
            numberOfWays[amount] += numberOfWays[amount - coin];
        }
    }

    return numberOfWays[money];
}
