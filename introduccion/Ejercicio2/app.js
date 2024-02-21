
function separaNumeros(numeros){

    let pares = [];
    let impares = [];

    for(let i=0; i<numeros.length; i++){
        if(numeros[i] % 2 == 0){
            console.log('Num par: '+numeros[i]);
            pares.push(numeros[i]);
        } else {
            console.log('Num impar: '+numeros[i]);
            impares.push(numeros[i]);
        }
    }

    return [pares, impares];
}

console.log(separaNumeros([1,2,3,4]));
console.log(separaNumeros([0,0,1,1,1]));