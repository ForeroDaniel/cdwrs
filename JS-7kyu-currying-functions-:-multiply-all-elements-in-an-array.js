function multiplyAll(arr) {
  return function (multiplier) {
    // Use map to create a new array with each element multiplied by the multiplier
    return arr.map((num) => num * multiplier);
  };
}
