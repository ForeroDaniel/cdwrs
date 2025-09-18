const crap = (garden, bags, cap) => {
    const flattenedGarden = garden.flat();

    const isDogPresent = flattenedGarden.some(item => item === 'D');

    if (isDogPresent) return 'Dog!!';

    const crapCount = flattenedGarden.filter(item => item === '@').length;

    if (bags === 0) return crapCount === 0 ? 'Clean' : 'Cr@p';

    const totalCapacity = bags * cap;

    return crapCount <= totalCapacity ? 'Clean' : 'Cr@p';
};
