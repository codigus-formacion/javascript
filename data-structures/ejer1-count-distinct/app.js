function countDistinct(provinces){

    let distinct = new Set(provinces);

    return distinct.size;
   
}

let provinces = ['Toledo', 'Madrid', 'Zaragoza', 'Barcelona', 'Toledo', 'Madrid'];

let distinct = countDistinct(provinces);

console.log(`There are ${distinct} distinct provinces`);