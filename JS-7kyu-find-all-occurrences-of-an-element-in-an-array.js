const findAll = (array, n) => array.reduce((acc, v, i) => v === n ? [...acc, i] : acc, []);
