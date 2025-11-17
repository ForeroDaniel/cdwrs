function newAvg(arr, newavg) {
  const currentSum = arr.reduce((acc, curr) => acc + curr, 0);
  const targetTotal = newavg * (arr.length + 1);
  const nextDonation = targetTotal - currentSum;

  if (nextDonation <= 0) {
    throw new Error("Expected New Average is too low");
  }

  return Math.ceil(nextDonation);
}
