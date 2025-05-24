function arrayLeaders(numbers) {
    let leaders = [];
    for (let i = 0; i < numbers.length; i++) {
        let sumRight = 0;
        for (let j = i + 1; j < numbers.length; j++) sumRight += numbers[j];
        if (numbers[i] > sumRight) leaders.push(numbers[i]);
    }
    return leaders;
}
