// Una expresión se guarda como { variable: coeficiente }.
// La clave '' representa el término constante (un número sin variable).

function sumar(a, b, signo) {
  const r = { ...a };
  for (const k in b) r[k] = (r[k] || 0) + signo * b[k];
  return r;
}

function multiplicar(a, b) {
  // Siempre uno de los dos es constante, así que basta con escalar al otro.
  const esConstante = (x) => Object.keys(x).every((k) => k === '');
  const [cte, otro] = esConstante(a) ? [a[''] || 0, b] : [b[''] || 0, a];
  const r = {};
  for (const k in otro) r[k] = otro[k] * cte;
  return r;
}

// Convierte un texto como "a + 3(6b - c)" en { a: 1, b: 18, c: -3 }
function parsear(texto) {
  const s = texto.replace(/\s+/g, '');
  let i = 0;

  // expresión = término (('+' | '-') término)*
  function expresion() {
    let total = termino();
    while (s[i] === '+' || s[i] === '-') {
      const signo = s[i++] === '+' ? 1 : -1;
      total = sumar(total, termino(), signo);
    }
    return total;
  }

  // término = signos* factor factor...   (ej: "-3f", "20(q-200f)", "-(-(g))")
  function termino() {
    let signo = 1;
    while (s[i] === '+' || s[i] === '-') if (s[i++] === '-') signo = -signo;

    let valor = { '': signo };
    while (i < s.length && s[i] !== '+' && s[i] !== '-' && s[i] !== ')') {
      valor = multiplicar(valor, factor());
    }
    return valor;
  }

  // factor = número | variable | '(' expresión ')'
  function factor() {
    if (s[i] === '(') {
      i++;
      const dentro = expresion();
      i++; // salta ')'
      return dentro;
    }
    if (/\d/.test(s[i])) {
      let n = '';
      while (/\d/.test(s[i])) n += s[i++];
      return { '': Number(n) };
    }
    return { [s[i++]]: 1 };
  }

  return expresion();
}

function simplify(equalities, formula) {
  // 1) Cada ecuación "izquierda = v" DEFINE la variable v (lado derecho).
  const definiciones = {};
  for (const eq of equalities) {
    const [izq, der] = eq.split('=');
    definiciones[der.trim()] = parsear(izq);
  }

  // 2) Reemplaza una variable por lo que vale, hasta llegar a una variable "base".
  const memo = {};
  function resolver(v) {
    if (memo[v]) return memo[v];
    if (!(v in definiciones)) return (memo[v] = { [v]: 1 }); // variable base
    let total = {};
    const def = definiciones[v];
    for (const k in def) total = sumar(total, multiplicar({ '': def[k] }, resolver(k)), 1);
    return (memo[v] = total);
  }

  // 3) Sustituye todas las variables de la fórmula por sus valores base.
  const expr = parsear(formula);
  let resultado = {};
  for (const k in expr) resultado = sumar(resultado, multiplicar({ '': expr[k] }, resolver(k)), 1);

  // 4) Queda una sola variable con su coeficiente.
  const base = Object.keys(resultado).find((k) => resultado[k] !== 0);
  return resultado[base] + base;
}
