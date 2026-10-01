function testResult(array) {
  let sum = array.reduce((acc, curr) => acc + curr, 0);
  let average = +(sum / array.length).toFixed(3);
  let h = array.filter(el => el >= 9).length;
  let a = array.filter(el => el < 9 && el > 6).length;
  let l = array.filter(el => el >= 1 && el < 7).length;
  let dict = {
    h: h,
    a: a,
    l: l,
  };
  
  return array.filter(el => el >= 9).length == array.length? [average, dict, 'They did well']: [average, dict]
}
