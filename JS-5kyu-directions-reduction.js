function dirReduc(directions) {
    const oppositeDirections = {
        'NORTH': 'SOUTH',
        'SOUTH': 'NORTH',
        'EAST': 'WEST',
        'WEST': 'EAST'
    };

    return directions.reduce((simplified, direction) => {
        if (simplified[simplified.length - 1] === oppositeDirections[direction]) {
            simplified.pop();
        } else {
            simplified.push(direction);
        }
        return simplified;
    }, []);



}
