function pattern(n){
  if (n < 1) return "";
  
  const lines = [];

  for (let i = 1; i <= n; i++) {
    const row = String(i).repeat(i);
    lines.push(row);
  }
  
  return lines.join("\n");
}
