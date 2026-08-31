const counterEffect = hitCount =>
  [...hitCount].map(val => [...Array(++val).keys()]);
