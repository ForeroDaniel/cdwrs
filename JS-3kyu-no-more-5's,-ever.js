// Un número cuenta si, mirando su valor absoluto (los negativos se tratan igual):
//   1. no tiene el dígito 5
//   2. no es divisible por 5 (como no tiene 5, basta con que no termine en 0)
//   3. no tiene exactamente 5 dígitos
//   4. no es una quinta potencia
// El 0 nunca cuenta (es múltiplo de 5 y quinta potencia).

function no5s(a, b) {
  if (a > b) return 0;

  // Quintas potencias que cumplen las reglas 1, 2 y 3. Son las únicas que hay
  // que restar, porque el conteo base ya las contó como buenas.
  // Con tope 10^15 basta con k hasta 1000, porque 1000^5 = 10^15.
  const quintasPotencias = [];
  for (let k = 1; k <= 1000; k++) {
    const p = k ** 5;
    const texto = String(p);
    if (!texto.includes('5') && texto.length !== 5 && p % 10 !== 0) {
      quintasPotencias.push(p);
    }
  }

  // Cuenta los enteros de 1 a n que cumplen las 4 reglas.
  function contarHasta(n) {
    if (n <= 0) return 0;
    const dig = String(n);
    const largo = dig.length;
    let total = 0;

    // Paso 1: todos los números con MENOS dígitos que n (completos, sin tope).
    for (let len = 1; len < largo; len++) {
      if (len === 5) continue; // regla 3: los de 5 dígitos no cuentan
      if (len === 1) {
        total += 8;                 // 1,2,3,4,6,7,8,9
      } else {
        // primer dígito: 8 opciones (sin 0 ni 5)
        // dígitos del medio: 9 opciones cada uno (sin 5)
        // último dígito: 8 opciones (sin 0 ni 5)
        total += 8 * 9 ** (len - 2) * 8;
      }
    }

    // Paso 2: números con EXACTAMENTE los mismos dígitos que n y que sean <= n.
    // Se recorre n dígito a dígito: en cada posición se cuentan los números que
    // se "separan" de n poniendo un dígito menor, y el resto queda libre.
    if (largo !== 5) {
      let coincideConN = true;
      for (let i = 0; i < largo && coincideConN; i++) {
        const restantes = largo - i - 1; // posiciones que quedan después de i
        const digitoDeN = Number(dig[i]);
        const desde = i === 0 ? 1 : 0;  // el primer dígito no puede ser 0

        for (let d = desde; d < digitoDeN; d++) {
          if (d === 5) continue;
          if (restantes === 0) {
            if (d !== 0) total += 1;            // último dígito: no puede ser 0
          } else {
            total += 9 ** (restantes - 1) * 8;  // libres sin 5, último sin 0 ni 5
          }
        }
        if (digitoDeN === 5) coincideConN = false; // n mismo ya tiene un 5
      }
      // Si n completo no tiene 5 y no termina en 0, n también cuenta.
      if (coincideConN && dig[largo - 1] !== '0') total += 1;
    }

    // Paso 3: restar las quintas potencias que se contaron sin querer.
    for (const p of quintasPotencias) {
      if (p <= n) total -= 1;
    }
    return total;
  }

  let resultado = 0;

  // Parte positiva: del 1 (o a) hasta b.
  const desdePos = Math.max(a, 1);
  if (b >= desdePos) {
    resultado += contarHasta(b) - contarHasta(desdePos - 1);
  }

  // Parte negativa: los negativos de [a, -1] se comportan como sus opuestos
  // positivos, es decir el rango [desdeNeg, hastaNeg].
  if (a <= -1) {
    const desdeNeg = -Math.min(b, -1);
    const hastaNeg = -a;
    if (hastaNeg >= desdeNeg) {
      resultado += contarHasta(hastaNeg) - contarHasta(desdeNeg - 1);
    }
  }

  return resultado;
}
