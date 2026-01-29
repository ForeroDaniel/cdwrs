function findUniq(arr) {
  // 1. Map the array to "signatures"
  // Example: "BbBb" -> "b", "AaAa" -> "a"
  const signatures = arr.map(str => {
    const letters = str.toLowerCase().replace(/\s/g, ''); // lowercase & remove spaces
    const uniqueSorted = [...new Set(letters)].sort().join('');
    return uniqueSorted;
  });

  // 2. Identify the "common" signature
  // We check the first 3 elements to determine which signature is the majority
  let common;
  if (signatures[0] === signatures[1]) {
    common = signatures[0];
  } else {
    // If the first two are different, the 3rd one will break the tie
    common = signatures[2] === signatures[0] ? signatures[0] : signatures[1];
  }

  // 3. Find the index of the string that doesn't match the common signature
  const uniqueIndex = signatures.findIndex(sig => sig !== common);
  
  return arr[uniqueIndex];
}
