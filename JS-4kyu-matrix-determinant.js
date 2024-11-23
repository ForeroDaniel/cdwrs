function determinant(matrix) {
    const n = matrix.length;
  
    // Base case for 1x1 matrix
    if (n === 1) return matrix[0][0];

    // Base case for 2x2 matrix
    if (n === 2) return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];

    let det = 0;

    // Calculate the determinant using the first row
    for (let col = 0; col < n; col++) {
        // Create a minor matrix
        const minor = matrix.slice(1).map(row => row.filter((_, index) => index !== col));
        // Recursive call to determinant function
        const minorDet = determinant(minor);
        // Alternating signs
        det += (col % 2 === 0 ? 1 : -1) * matrix[0][col] * minorDet;
    }

    return det;
}
