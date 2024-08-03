function diamond(n) {
  if (n <= 0 || n % 2 === 0) return null;

  let diamond = '';
  for (let i = 1; i <= n; i += 2) {
    const spaces = ' '.repeat((n - i) / 2);
    diamond += spaces + '*'.repeat(i) + '\n';
  }

  for (let i = n - 2; i > 0; i -= 2) {
    const spaces = ' '.repeat((n - i) / 2);
    diamond += spaces + '*'.repeat(i) + '\n';
  }

  return diamond;
}
