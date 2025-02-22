const Xbonacci = (signature, n) => {
  if (n <= signature.length) return signature.slice(0, n);

  const sequence = [...signature];
  
  // Generate the sequence until it reaches the desired length
  for (let i = signature.length; i < n; i++) {
    const nextElement = sequence.slice(i - signature.length, i).reduce((acc, num) => acc + num, 0);
    sequence.push(nextElement);
  }
  
  return sequence;
};
