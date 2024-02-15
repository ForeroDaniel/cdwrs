String.prototype.toJadenCase = function () {
  const newStr = this.split(' ').map( x => {
    return x.charAt(0).toUpperCase() + x.slice(1);
  })
  return newStr.join(' ')
};
