function cuentaDistintas(provincias){

    let distintas = new Set(provincias);

    return distintas.size;
   
}

let provincias = ['Toledo', 'Madrid', 'Zaragoza', 'Barcelona', 'Toledo', 'Madrid'];

let distintas = cuentaDistintas(provincias);

console.log(`Hay ${distintas} provincias distintas`);