function josephusSurvivor(n, k) {
  let survivor = 0;
  for (let i = 1; i <= n; i++) {
    survivor = (survivor + k) % i;
  }
  return survivor + 1; // Adding 1 because positions start from 1, not 0
}
