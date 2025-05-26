function validateHello(greetings) {
  const greetingsRegex = /\b(hello|ciao|salut|hallo|hola|ahoj|czesc)\b/i;
  const res = greetingsRegex.test(greetings);
  return res
}
