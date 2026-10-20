// Stack of currently executing methods (dynamic scope for callNextMethod)
var __gfStack = [];

// Set to false to silence all logs
var __gfDebug = true;
function __gfLog() {
  if (!__gfDebug) return;
  var indent = new Array(__gfStack.length + 1).join('  ');
  console.log.apply(console, ['[generic] ' + indent + Array.prototype.shift.call(arguments)].concat(Array.prototype.slice.call(arguments)));
}

function __gfIsObj(a) {
  return a !== null && (typeof a === 'object' || typeof a === 'function');
}

// Lower rank = more specific. -1 = no match.
function __gfRank(a, t) {
  if (t === '*') return 2000;
  if (a === null) {
    if (t === 'null') return 0;
    return t === 'object' ? 1000 : -1;
  }
  if (__gfIsObj(a)) {
    var obj = a, depth = 0;
    while (obj !== null && obj !== undefined) {
      var c = obj.constructor;
      if (c && c.name === t) return depth;
      var next = Object.getPrototypeOf(obj);
      if (next === obj) break;
      obj = next;
      depth++;
    }
  }
  return typeof a === t ? 1000 : -1;
}

function __gfTypeName(a) {
  if (a === null) return 'null';
  if (__gfIsObj(a) && a.constructor && a.constructor.name) return a.constructor.name;
  return typeof a;
}

function __gfTypeKey(a) {
  if (a === null) return 'null';
  if (!__gfIsObj(a)) return typeof a;
  var names = [], obj = a;
  while (obj !== null) {
    names.push(obj.constructor ? obj.constructor.name : '?');
    var next = Object.getPrototypeOf(obj);
    if (next === obj) break;
    obj = next;
  }
  return typeof a + ':' + names.join('>');
}

function __gfCompare(r1, r2) {
  for (var i = 0; i < r1.length; i++) {
    if (r1[i] !== r2[i]) return r1[i] - r2[i];
  }
  return 0;
}

function __gfNoMethod(name, args) {
  return 'No method found for ' + name + ' with args: ' + args.map(__gfTypeName).join(',');
}

function __gfInvoke(self, res, kind, idx, args) {
  var fn = res[kind][idx].fn;
  __gfLog('-> ' + res.name + ' ' + kind + ' #' + idx + ' (' + args.map(__gfTypeName).join(',') + ')');
  __gfStack.push({ res: res, kind: kind, idx: idx });
  try {
    var ret = fn.apply(self, args);
    __gfStack.pop();
    __gfLog('<- ' + res.name + ' ' + kind + ' #' + idx + ' returned', ret);
    return ret;
  } catch (e) {
    __gfStack.pop();
    __gfLog('!! ' + res.name + ' ' + kind + ' #' + idx + ' threw', e);
    throw e;
  }
}

// before methods, most specific primary, after methods
function __gfStandard(self, res, args) {
  if (!res.primary.length) {
    __gfLog('!! ' + res.name + ': no primary method');
    throw __gfNoMethod(res.name, args);
  }
  var i;
  for (i = 0; i < res.before.length; i++) __gfInvoke(self, res, 'before', i, args);
  var ret = __gfInvoke(self, res, 'primary', 0, args);
  for (i = res.after.length - 1; i >= 0; i--) __gfInvoke(self, res, 'after', i, args);
  return ret;
}

function __gfRun(self, res, args) {
  if (res.around.length) return __gfInvoke(self, res, 'around', 0, args);
  return __gfStandard(self, res, args);
}

function callNextMethod(self) {
  var args = Array.prototype.slice.call(arguments, 1);
  var ctx = __gfStack[__gfStack.length - 1];
  __gfLog('callNextMethod from ' + (ctx ? ctx.kind + ' #' + ctx.idx : 'nowhere'));
  if (!ctx) throw 'callNextMethod called outside of a generic method';
  var res = ctx.res;
  if (ctx.kind === 'around') {
    if (ctx.idx + 1 < res.around.length) return __gfInvoke(self, res, 'around', ctx.idx + 1, args);
    if (res.primary.length) return __gfStandard(self, res, args);
    // no more around methods and no primary to fall through to
  } else if (ctx.kind === 'primary' && ctx.idx + 1 < res.primary.length) {
    return __gfInvoke(self, res, 'primary', ctx.idx + 1, args);
  }
  __gfLog('!! no next ' + ctx.kind + ' method for ' + res.name);
  throw 'No next method found for ' + res.name + ' in ' + ctx.kind;
}

function defgeneric(name) {
  var methods = [];
  var cache = {};

  function parse(disc) {
    disc = String(disc).trim();
    return disc === '' ? [] : disc.split(',').map(function (s) { return s.trim(); });
  }

  // Snapshot of applicable methods, sorted most -> least specific
  function resolve(args) {
    var res = { name: name, around: [], before: [], primary: [], after: [] };
    var found = { around: [], before: [], primary: [], after: [] };
    methods.forEach(function (m) {
      if (m.types.length !== args.length) return;
      var ranks = [];
      for (var i = 0; i < args.length; i++) {
        var r = __gfRank(args[i], m.types[i]);
        if (r < 0) return;
        ranks.push(r);
      }
      found[m.comb].push({ fn: m.fn, ranks: ranks });
    });
    Object.keys(found).forEach(function (k) {
      res[k] = found[k].sort(function (a, b) { return __gfCompare(a.ranks, b.ranks); });
    });
    __gfLog(name + ' resolved: around=' + res.around.length + ' before=' + res.before.length +
      ' primary=' + res.primary.length + ' after=' + res.after.length +
      ' for (' + args.map(__gfTypeName).join(',') + ')');
    return res;
  }

  var generic = function () {
    var args = Array.prototype.slice.call(arguments);
    __gfLog('call ' + name + '(' + args.map(__gfTypeName).join(',') + ')');
    var res = resolve(args);
    if (!res.around.length && !res.primary.length) {
      __gfLog('!! ' + name + ': no applicable method');
      throw __gfNoMethod(name, args);
    }
    return __gfRun(this, res, args);
  };

  generic.defmethod = function (disc, fn, comb) {
    comb = comb || 'primary';
    var types = parse(disc);
    var key = types.join(',');
    var existing = methods.filter(function (m) { return m.key === key && m.comb === comb; })[0];
    if (existing) existing.fn = fn;
    else methods.push({ key: key, types: types, fn: fn, comb: comb });
    __gfLog(name + '.defmethod(' + key + ', ' + comb + ') ' + (existing ? 'replaced' : 'added'));
    cache = {};
    return generic;
  };

  generic.removeMethod = function (disc, comb) {
    comb = comb || 'primary';
    var key = parse(disc).join(',');
    var before = methods.length;
    methods = methods.filter(function (m) { return !(m.key === key && m.comb === comb); });
    __gfLog(name + '.removeMethod(' + key + ', ' + comb + ') ' + (methods.length < before ? 'removed' : 'not found, ignored'));
    cache = {};
    return generic;
  };

  generic.findMethod = function () {
    var args = Array.prototype.slice.call(arguments);
    var key = args.map(__gfTypeKey).join('|');
    if (cache.hasOwnProperty(key)) {
      __gfLog(name + '.findMethod cache hit [' + key + ']');
      return cache[key];
    }
    __gfLog(name + '.findMethod cache miss [' + key + ']');
    var res = resolve(args); // snapshot: later changes don't affect it
    var fn = function () {
      var a = Array.prototype.slice.call(arguments);
      if (!res.around.length && !res.primary.length) throw __gfNoMethod(name, a);
      return __gfRun(this, res, a);
    };
    cache[key] = fn;
    return fn;
  };

  return generic;
}

if (typeof global !== 'undefined') {
  global.defgeneric = defgeneric;
  global.callNextMethod = callNextMethod;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { defgeneric: defgeneric, callNextMethod: callNextMethod };
}
