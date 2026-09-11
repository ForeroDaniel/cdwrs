const runLengthEncoding = str =>
  (str.match(/(.)\1*/g) || []).map(val => [val.length, val[0]]);
