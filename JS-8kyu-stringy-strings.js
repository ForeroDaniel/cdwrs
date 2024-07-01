function stringy(size) {
  const str = '10'.repeat(size / 2);
  return size % 2 === 0 ? str : str.concat('1')
}
