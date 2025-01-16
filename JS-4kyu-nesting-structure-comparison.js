Array.prototype.sameStructureAs = function(other) {
  // Check if other is an array, and both arrays have the same length
  if (!Array.isArray(other) || this.length !== other.length) return false;
  
  // Recursive function to check the structure of the arrays
  for (let i = 0; i < this.length; i++) {
    // If the current elements are arrays, recursively check their structure
    if (Array.isArray(this[i]) && Array.isArray(other[i])) {
      if (!this[i].sameStructureAs(other[i])) return false;
    }
    // If one is an array and the other is not, return false
    else if (Array.isArray(this[i]) !== Array.isArray(other[i])) return false;
  }

  // If all checks pass, the structures match
  return true;
};
