// Idea: recorremos el arreglo de derecha a izquierda.
// Vamos guardando cuántas veces hemos visto cada valor, y para cada número
// preguntamos "¿cuántos valores menores a este ya vi?". Eso es justo la
// cantidad de números menores que quedan a su derecha.
//
// Para responder esa pregunta rápido usamos un Árbol de Fenwick (BIT),
// una estructura que suma conteos por rangos en O(log n).

function smaller(arr) {
  // 1. Compresión de valores: cambiamos cada número por su posición (1, 2, 3...)
  //    en la lista ordenada y sin repetidos. Así el árbol solo necesita
  //    tantas casillas como valores distintos haya.
  const valoresOrdenados = [...new Set(arr)].sort((a, b) => a - b);
  const posicion = new Map();
  valoresOrdenados.forEach((valor, i) => posicion.set(valor, i + 1));

  // 2. El árbol: conteo[p] guarda cuántos números de esa posición hemos visto
  //    (de forma agrupada para poder sumar rápido).
  const total = valoresOrdenados.length;
  const conteo = new Int32Array(total + 1);

  // Suma cuántos números vistos tienen posición <= p
  function contarHasta(p) {
    let suma = 0;
    while (p > 0) {
      suma += conteo[p];
      p -= p & -p; // salta al siguiente grupo
    }
    return suma;
  }

  // Registra que vimos un número con posición p
  function agregar(p) {
    while (p <= total) {
      conteo[p] += 1;
      p += p & -p; // salta al siguiente grupo que debe actualizarse
    }
  }

  // 3. Recorremos de derecha a izquierda
  const resultado = new Array(arr.length);
  for (let i = arr.length - 1; i >= 0; i--) {
    const p = posicion.get(arr[i]);

    // Menores estrictos a la derecha = vistos con posición < p
    resultado[i] = contarHasta(p - 1);

    // Ahora este número también cuenta para los de su izquierda
    agregar(p);
  }

  return resultado;
}
