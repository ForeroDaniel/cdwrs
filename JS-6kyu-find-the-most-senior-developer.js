function findSenior(list) {
    let maxAge = -1; // Initialize with a value lower than any possible age

    for (let i = 0; i < list.length; i++) {
        const developer = list[i];
        if (developer.age > maxAge) maxAge = developer.age;
    }

    const oldestDevelopers = [];
    for (let i = 0; i < list.length; i++) {
        const developer = list[i];
        if (developer.age === maxAge) oldestDevelopers.push(developer);
    }

    return oldestDevelopers;
}
