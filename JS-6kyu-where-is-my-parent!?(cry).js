function findChildren(dancingBrigade) {
	return dancingBrigade.split('')
              .sort((a, b) => {
                  const lowerA = a.toLowerCase();
                  const lowerB = b.toLowerCase();
                  if (lowerA < lowerB) return -1;
                  if (lowerA > lowerB) return 1;
                  // If same letter, uppercase comes first
                  if (a === a.toUpperCase() && b !== b.toUpperCase()) return -1;
                  if (a !== a.toUpperCase() && b === b.toUpperCase()) return 1;
                  return 0;
              })
              .join('');
}
