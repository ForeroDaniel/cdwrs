function remove (string) { 
  while (string.endsWith('!')) string = string.substring(0, string.length-1);
  return string;
}
