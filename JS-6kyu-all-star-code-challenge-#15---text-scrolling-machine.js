function rotate(str) {
  const result = [];
  let current = str;

  // Repetimos una vez por cada letra del texto original
  for (let i = 0; i < str.length; i++) {
    // Movemos la primera letra al final
    current = current.slice(1) + current[0];
    result.push(current);
  }

  return result;
}
