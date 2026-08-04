function minMinMax(arr) {
	var max = Math.max(...arr);
  var min = Math.min(...arr);
  for (var i = min; i < max; i++) {
  	if (!arr.includes(i)) return [min, i, max];
  }
}
