const add = (x, y, b = 1.0000001) => Math.round(Math.log(b ** x * b ** y) / Math.log(b));
