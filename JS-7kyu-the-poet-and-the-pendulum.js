function pendulum(values) {

  let sort = values.slice().sort((a, b) => a - b)
  ,  parts = { left: [], right: [] };
  
  for (let i = 0; i < sort.length; i++) 
    parts[i % 2 ? 'right' : 'left'].push(sort[i]);

  return parts.left.reverse().concat(parts.right);
  
}
