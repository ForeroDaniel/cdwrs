function inviteMoreWomen(L) {
    // Count women and men in the list
    const womenCount = L.filter(x => x === -1).length;
    const menCount = L.filter(x => x === 1).length;

    // If the number of men exceeds the number of women, return true
    return menCount > womenCount;
}
