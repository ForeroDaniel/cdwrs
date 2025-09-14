function rank(st, we, n) {
  // Handle the case where the input string of names is empty.
  if (!st || st.length === 0) {
    return "No participants";
  }

  // Split the input string into an array of names. [1, 2, 3, 4, 5]
  const names = st.split(',');

  // Handle the case where the requested rank is greater than the number of participants.
  if (n > names.length) {
    return "Not enough participants";
  }

  // Calculate the winning number for each participant.
  const participants = names.map((name, index) => {
    // Calculate the sum of the alphabetical ranks of the letters in the name.
    // The calculation is case-insensitive.
    const sumOfRanks = name.toLowerCase().split('').reduce((sum, char) => {
      return sum + char.charCodeAt(0) - 96; // 'a'.charCodeAt(0) is 97, so we subtract 96 to get a rank of 1. [14]
    }, 0);

    // The 'som' is the sum of the ranks plus the length of the name.
    const som = sumOfRanks + name.length;

    // The winning number is the 'som' multiplied by the corresponding weight.
    const winningNumber = som * we[index];

    return {
      name: name,
      winningNumber: winningNumber,
    };
  });

  // Sort the participants based on the specified criteria. [6, 7, 8, 9, 10]
  participants.sort((a, b) => {
    // If winning numbers are different, sort in descending order.
    if (a.winningNumber !== b.winningNumber) {
      return b.winningNumber - a.winningNumber;
    }
    // If winning numbers are the same, sort names alphabetically.
    return a.name.localeCompare(b.name);
  });

  // Return the name of the participant at the specified rank (n).
  // Since ranks are 1-based, we use n-1 for the array index.
  return participants[n - 1].name;
}
