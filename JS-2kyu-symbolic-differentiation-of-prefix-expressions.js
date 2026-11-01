// ---------- 1. Leer el texto y convertirlo en un árbol ----------
// "(+ x 1)" -> ["+", "x", 1]
function parse(tokens) {
  const token = tokens.shift();
  if (token !== "(") return isNaN(token) ? token : Number(token);

  const nodo = [];
  while (tokens[0] !== ")") nodo.push(parse(tokens));
  tokens.shift(); // quita el ")"
  return nodo;
}

// ---------- 2. Convertir el árbol otra vez en texto ----------
function toText(nodo) {
  if (!Array.isArray(nodo)) return String(nodo);
  return "(" + nodo.map(toText).join(" ") + ")";
}

// ---------- 3. Constructores que ya simplifican ----------
const esNum = (a) => typeof a === "number";

function add(a, b) {
  if (esNum(a) && esNum(b)) return a + b;
  if (a === 0) return b;
  if (b === 0) return a;
  return ["+", a, b];
}

function sub(a, b) {
  if (esNum(a) && esNum(b)) return a - b;
  if (b === 0) return a;
  return ["-", a, b];
}

function mul(a, b) {
  if (esNum(a) && esNum(b)) return a * b;
  if (a === 0 || b === 0) return 0;
  if (a === 1) return b;
  if (b === 1) return a;
  return ["*", a, b];
}

function div(a, b) {
  if (esNum(a) && esNum(b)) return a / b;
  if (a === 0) return 0;
  if (b === 1) return a;
  return ["/", a, b];
}

function pow(base, exp) {
  if (exp === 0) return 1;
  if (exp === 1) return base;
  if (esNum(base) && esNum(exp)) return base ** exp;
  return ["^", base, exp];
}

// ---------- 4. Reglas de derivación ----------
function derive(e) {
  if (e === "x") return 1;
  if (esNum(e)) return 0;

  const [op, u, v] = e;
  const du = derive(u); // derivada del primer argumento

  switch (op) {
    case "+": return add(du, derive(v));
    case "-": return sub(du, derive(v));
    case "*": return add(mul(du, v), mul(u, derive(v)));
    case "/": return div(sub(mul(du, v), mul(u, derive(v))), pow(v, 2));
    case "^": return mul(mul(v, pow(u, v - 1)), du);

    // Funciones: regla de la cadena (derivada de afuera * derivada de adentro)
    case "cos": return mul(mul(-1, du), ["sin", u]);
    case "sin": return mul(du, ["cos", u]);
    case "tan": return mul(du, add(1, pow(["tan", u], 2)));
    case "exp": return mul(du, ["exp", u]);
    case "ln":  return div(du, u);
  }
}

function diff(expr) {
  const tokens = expr.replace(/\(/g, " ( ").replace(/\)/g, " ) ").trim().split(/\s+/);
  return toText(derive(parse(tokens)));
}
