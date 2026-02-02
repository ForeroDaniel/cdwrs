function simplify(number) {
	return [ ...String(number) ]
		.reduce((sum, num, index) => {
			return num == 0
				? (sum += '')
				: String(number).length == index + 1
					? (sum += `${num}+`)
					: (sum += `${num}*${Math.pow(10, String(number).length - index - 1)}+`);
		}, '')
		.slice(0, -1);
}
