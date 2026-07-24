function LCS(x, y) {
  var longest = function (x, y) { return x.length > y.length ? x : y };
  if (!x.length || !y.length) {
    return '';
  } else if (x[0] == y[0]) {
    return x[0] + LCS(x.slice(1), y.slice(1));
  } else {
    return longest(LCS(x.slice(1), y), LCS(x, y.slice(1)));
  }
}
