function tco(fd) {
  class Tail {
    constructor(i, a) { this.i = i; this.a = a; }
  }
  const scope = Object.create(null);
  fd.forEach((d, i) => { scope[d[0]] = function () { return new Tail(i, arguments); }; });
  const impls = fd.map(d =>
    new Function('__scope__', 'with (__scope__) { return function(' + d[1].join(',') + '){' + d[2] + '\n} }')(scope)
  );
  return impls.map((_, i) => function () {
    let r = new Tail(i, arguments);
    while (r instanceof Tail) r = impls[r.i].apply(this, r.a);
    return r;
  });
}
