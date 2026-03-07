const frame = (text, char) => {
  const width = text.reduce((maxWidth, v) => v.length > maxWidth ? v.length : maxWidth, 0)
  const line = content => `${char} ${content.padEnd(width, ' ')} ${char}`
  const edge = char.repeat(width + 4)
  
  return [edge, ...text.map(line), edge].join('\n');
};
