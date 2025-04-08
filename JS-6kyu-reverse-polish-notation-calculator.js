function calc(expr) {
  if (!expr.trim()) return 0; // Handle empty expression

  const stack = [];
  const tokens = expr.split(' ');

  for (const token of tokens) {
    if (!isNaN(token)) {
      // If the token is a number, push it onto the stack
      stack.push(Number(token));
    } else {
      // If the token is an operator, pop two numbers and apply the operator
      const b = stack.pop();
      const a = stack.pop();

      switch (token) {
        case '+':
          stack.push(a + b);
          break;
        case '-':
          stack.push(a - b);
          break;
        case '*':
          stack.push(a * b);
          break;
        case '/':
          stack.push(a / b);
          break;
        default:
          throw new Error(`Unknown operator: ${token}`);
      }
    }
  }

  // The final result is the only element left in the stack
  return stack.length === 1 ? stack[0] : 0;
}
