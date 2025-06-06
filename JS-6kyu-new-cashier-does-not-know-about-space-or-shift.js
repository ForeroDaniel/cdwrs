function getOrder(input) {
    const menuItems = [
        'Burger',
        'Fries',
        'Chicken',
        'Pizza',
        'Sandwich',
        'Onionrings',
        'Milkshake',
        'Coke'
    ];
    
    const lowerMenuItems = menuItems.map(item => item.toLowerCase());
    const order = [];
    let i = 0;
    
    while (i < input.length) {
        let found = false;
        for (let j = 0; j < lowerMenuItems.length; j++) {
            const item = lowerMenuItems[j];
            if (input.startsWith(item, i)) {
                order.push(menuItems[j]);
                i += item.length;
                found = true;
                break;
            }
        }
        if (!found) {
            // In case there's an unrecognized part (though problem says no overlap)
            i++;
        }
    }
    
    // Group and count each item in the order they appear in the menu
    const menuOrder = [];
    for (const item of menuItems) {
        const count = order.filter(x => x === item).length;
        for (let k = 0; k < count; k++) {
            menuOrder.push(item);
        }
    }
    
    return menuOrder.join(' ');
}
