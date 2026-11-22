var Sudoku = function(data)
{
  // Private methods
  // -------------------------

  // Comprueba que un grupo (fila, columna o cuadro) tenga exactamente 1..N sin repetir
  function isValidGroup(group, n) {
    var seen = new Set();
    for (var value of group) {
      // Debe ser un entero real (descarta true, "1", 1.5, etc.)
      if (typeof value !== 'number' || !Number.isInteger(value)) return false;
      if (value < 1 || value > n) return false;
      if (seen.has(value)) return false;
      seen.add(value);
    }
    return seen.size === n;
  }

  // Comprueba que data sea una matriz NxN con N > 0 y √N entero
  function hasValidShape() {
    if (!Array.isArray(data) || data.length === 0) return false;
    var n = data.length;
    if (!Number.isInteger(Math.sqrt(n))) return false;
    return data.every(function(row) {
      return Array.isArray(row) && row.length === n;
    });
  }

  function getColumn(col) {
    return data.map(function(row) { return row[col]; });
  }

  function getSquare(index, size) {
    var startRow = Math.floor(index / size) * size;
    var startCol = (index % size) * size;
    var cells = [];
    for (var r = 0; r < size; r++) {
      for (var c = 0; c < size; c++) {
        cells.push(data[startRow + r][startCol + c]);
      }
    }
    return cells;
  }

  // Public methods
  // -------------------------
  return {
    isValid: function() {
      if (!hasValidShape()) return false;

      var n = data.length;
      var size = Math.sqrt(n); // lado de cada cuadro pequeño

      for (var i = 0; i < n; i++) {
        if (!isValidGroup(data[i], n)) return false;          // fila i
        if (!isValidGroup(getColumn(i), n)) return false;     // columna i
        if (!isValidGroup(getSquare(i, size), n)) return false; // cuadro i
      }
      return true;
    }
  };
};
