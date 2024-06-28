String.prototype.isUpperCase = function() {
  return /^[^a-z]*$/.test(this);
}
