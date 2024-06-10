function arrayToString(array, separator) {
    if (!separator) {
        separator = ",";
    }
    let result = "";
    for (let i = 0; i < array.length; i++) {
        result += array[i] + separator;
    }
    return result;
}

console.log(arrayToString([1, 2, 3, 4]));
console.log(arrayToString([1, 2, 3, 4], "-"));