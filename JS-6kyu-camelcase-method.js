String.prototype.camelCase = function() {
  return this.split(' ')
             .map(function(x) {
                if (x) {
                  return x[0].toUpperCase() + x.slice(1);
                }
                return '';
           }).join('');
}
