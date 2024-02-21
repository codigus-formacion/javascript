
function quitaNumeros(numeros, quitaNumero) {
    let sinNumeros = [];
    for (let i = 0; i < numeros.length; i++) {
        if (!quitaNumero(numeros[i])) {
            sinNumeros.push(numeros[i]);
        }
    }
    return sinNumeros;
}

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

function quitaNumerosYOrdena(matriz, f) {
    for (let i = 0; i < matriz.length; i++) {
        matriz[i] = quitaNumeros(matriz[i], f);
    }
    sortArrays(matriz);
    return matriz;
}

console.log(quitaNumerosYOrdena([
    [7, 0, 2, 1, 0, 1],
    [3, 0, 0, 2],
    [7, 9, 0],
    [6, 5, 0, 1, 0, 2, 0]], num => num > 2));


console.log(quitaNumerosYOrdena([
    [7, 0, 2, 1, 0, 1],
    [3, 0, 0, 2],
    [7, 9, 0],
    [6, 5, 0, 1, 0, 2, 0]], num => num === 0));