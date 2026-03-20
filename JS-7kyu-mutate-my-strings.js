function mutateMyStrings(str1, str2) {
	const res = [];
	for (let i = 0; i <= str2.length; i++)
    res.push(str2.slice(0, i) + str1.slice(i));
  return [...new Set(res)].join('\n') + '\n';
}
