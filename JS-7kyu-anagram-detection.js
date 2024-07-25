// write the function isAnagram
var isAnagram = function(str1, str2) {
  const normalize = (str) => str.toLowerCase().replace(/[^a-z0-9]/g, '');
  const sortedStr1 = normalize(str1).split('').sort().join('');
  const sortedStr2 = normalize(str2).split('').sort().join('');
  return sortedStr1 === sortedStr2;
};
