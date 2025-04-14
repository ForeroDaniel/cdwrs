function triangle(row) {
    let current = row.split('');
    while (current.length > 1) {
        const nextRow = [];
        for (let i = 0; i < current.length - 1; i++) {
            const a = current[i];
            const b = current[i + 1];
            if (a === b) {
                nextRow.push(a);
            } else {
                const colors = new Set(['R', 'G', 'B']);
                colors.delete(a);
                colors.delete(b);
                nextRow.push([...colors][0]);
            }
        }
        current = nextRow;
    }
    return current[0];
}
