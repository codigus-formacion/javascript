let removeZeroes = require('./remove-zeroes');

function sortArrays(arrays) {
    for (let i = 0; i < arrays.length; i++) {
        for (let j = 0; j < arrays.length-1; j++) {
            if (arrays[j].length > arrays[j + 1].length) {
                let temp = arrays[j];
                arrays[j] = arrays[j + 1];
                arrays[j + 1] = temp;
            }
        }
    }
    return arrays;
}

function removeZeroesAndSort(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        matrix[i] = removeZeroes(matrix[i]);
    }
    sortArrays(matrix);
    return matrix;
}

console.log(removeZeroesAndSort([
    [7, 0, 2, 1, 0, 1],
    [3, 0, 0, 2],
    [7, 9, 0],
    [6, 5, 0, 1, 0, 2, 0]]));