// You should implement your task here.

module.exports = function towelSort(matrix) {
    let result = [];
    if (!matrix) {
        return [];
    } else {
        matrix.forEach((mat, i) => {
            if (i % 2 === 1) {
                mat.reverse();
                // result.push(mat);
                mat.map((m) => result.push(m));
            } else if (i % 2 === 0) {
                // result.push(mat);
                mat.map((m) => result.push(m));
            }
        });
        return result;
    }
};
