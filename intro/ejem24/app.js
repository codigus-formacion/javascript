let empleado = {
    nombre: 'Pepe',
    salario: 700,
    toString: function () {
        return 'N:' + this.nombre + ' S:' + this.salario;
    }
}

//Muestra N:Pepe S:700
console.log(empleado.toString());

empleado.getCategoria = function () {
    return this.salario > 800 ? 'Superior' : 'Normal';
}

console.log('C:' + empleado.getCategoria());