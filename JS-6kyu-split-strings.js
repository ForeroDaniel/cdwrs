function solution(str) {
  const arr = [];
  for (let i = 0; i < str.length; i += 2) {
    const pair = str.slice(i, i + 2);
    arr.push(pair.length === 2 ? pair : pair + '_');
  }
  return arr;
}
