function remove(string) {
  const [, body, trailingMarks] = string.match(/^([\s\S]*?)(!*)$/);
  const bodyWithoutMarks = body.replace(/!/g, '');
  return bodyWithoutMarks + trailingMarks;
}
