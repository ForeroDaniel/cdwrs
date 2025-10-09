function validSpacing(s) {
  if (s !== s.trim()) {
    return false;
  }
  if (s.includes("  ")) {
    return false;
  }
  return true;
}
