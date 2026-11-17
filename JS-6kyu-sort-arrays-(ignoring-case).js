function sortme(names) {
  return [...names].sort((a, b) =>
    a.toLowerCase().localeCompare(b.toLowerCase())
  );
}
