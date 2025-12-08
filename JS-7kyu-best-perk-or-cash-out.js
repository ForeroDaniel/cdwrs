function pick(preferred, blacklisted, options) {
  let pickMap = {
    [options[0]]: "A",
    [options[1]]: "B",
    [options[2]]: "C",
    money: "D"
  };
  let pick = options.filter(opt => ![...blacklisted].includes(opt[0])).sort((a, b) => b[1] - a[1]);
  if (pick.length === 0) {return pickMap.money} //show me the money!
  let pref = pick.filter(opt => [...preferred].includes(opt[0]));
  if (pref.length > 0) {return pickMap[pref[0]]}
  return pickMap[pick[0]];
}
