function meeting(s) {
  return s.toUpperCase()                    // Convert string to uppercase
    .split(';')                             // Split into individual name entries
    .map(entry => entry.split(':'))          // Split each entry into [firstName, lastName]
    .sort((a, b) => {                        // Sort by last name, then first name
      return a[1] !== b[1] ? a[1].localeCompare(b[1]) : a[0].localeCompare(b[0]);
    })
    .map(([firstName, lastName]) => `(${lastName}, ${firstName})`)  // Format the result
    .join('');                               // Join all formatted strings together
}
