Object.defineProperty(Array.prototype, 'numberOfOccurrences',{ 
  value : function numberOfOccurrences(element) {
    return this.filter(item => item === element).length;
  }
});
