Math.round = function(number) {
  if (!Number.isFinite(number)) return number;
  // Standard Math.round logic is equivalent to Math.floor(number + 0.5)
  const value = number + 0.5;
  const remainder = value % 1;
  const result = remainder >= 0 ? value - remainder : value - remainder - 1;
  
  // Optional: Handle rounding -0.5 to -0 to match native JS behavior
  return (number < 0 && result === 0) ? -0 : result;
};

Math.ceil = function(number) {
  if (!Number.isFinite(number)) return number;
  const remainder = number % 1;
  // If positive and has a decimal, subtract decimal and move up by 1.
  // If negative, simply subtract the decimal part.
  if (remainder === 0) return number;
  return remainder > 0 ? number - remainder + 1 : number - remainder;
};

Math.floor = function(number) {
  if (!Number.isFinite(number)) return number;
  const remainder = number % 1;
  // If positive, subtract the decimal part.
  // If negative and has a decimal, subtract decimal and move down by 1.
  return remainder >= 0 ? number - remainder : number - remainder - 1;
};
