function longestConsec(strarr, k) {
  let longestStr = '';
  if (k >= 0 && strarr.length > 0 && k <= strarr.length){
    for (let i = 0; i < strarr.length +1 - k; ++i){
    let currentStr = strarr.slice(i, i + k).join('')
    
    if (currentStr.length > longestStr.length) longestStr = currentStr;
    }
  }
  return longestStr
}
