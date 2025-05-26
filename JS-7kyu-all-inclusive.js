function containAllRots(strng, arr) {
    if (strng === "") return true;
    const rotations = [];
    for (let i = 0; i < strng.length; i++) {
        const rotation = strng.slice(i) + strng.slice(0, i);
        rotations.push(rotation);
    }
    for (const rotation of rotations) {
        if (!arr.includes(rotation)) return false;
    }
    return true;
}
