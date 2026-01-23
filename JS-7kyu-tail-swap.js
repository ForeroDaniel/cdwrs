function tailSwap(arr) {
  const [A, B, C, D] = arr.join(':').split(':');
  return [`${A}:${D}`,`${C}:${B}`];
}
