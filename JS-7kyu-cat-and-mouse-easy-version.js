function catMouse(x){
    const mouseIndex = x.indexOf('m');
    const catIndex = 0; // This will always be 0 as per problem description

    const distance = mouseIndex - catIndex - 1;

    if (distance <= 3) {
        return "Caught!";
    } else {
        return "Escaped!";
    }
}
