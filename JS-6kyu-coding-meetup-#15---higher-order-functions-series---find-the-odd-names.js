function findOddNames(list) {
  // Suma los códigos ASCII de todas las letras de un nombre
  const sumaAscii = (nombre) =>
    nombre
      .split("")
      .reduce((total, letra) => total + letra.charCodeAt(0), 0);

  // Deja solo a los desarrolladores cuya suma sea impar
  // (filter conserva el orden original y devuelve [] si ninguno cumple)
  return list.filter((dev) => sumaAscii(dev.firstName) % 2 !== 0);
}
