function scramble(str, arr) {
  let output = [];
  arr.forEach((charIdx, i) => output[charIdx] = str[i])
  return output.join('');
};
