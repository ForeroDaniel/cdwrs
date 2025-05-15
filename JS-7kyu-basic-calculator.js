function calculate(a, operation, b) {
  switch (operation) {
    case "+": return a + b;
    case "-": return a - b;
    case "*": return a * b;
    case "/": return b === 0 ? null : a / b;
    default:  return null;
  }
}
