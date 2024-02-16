function isValidWalk(walk) {
  const count = {
    ns: 0,
    we: 0,
  };
  for (let e of walk) {
    switch (e) {
        case 'n': ++count.ns;
        break;
        case 's': --count.ns;
        break;
        case 'w': ++count.we;
        break;
        case 'e': --count.we;
        break;
    }
  }
  return walk.length === 10 && count.ns === 0 && count.we === 0;
}
