function printerError(s) {
  let errorCount = 0;
  for (let i = 0; i < s.length; ++i) {
    if (s.codePointAt(i) > 109) errorCount++;
  }
  return `${errorCount}/${s.length}`
}
