function nuevoEmpleado(nombre, salario) {

    var empleado = {
        nombre: nombre,
        salario: salario,
        toString: function () {
            return "N:" + this.nombre + " S:" + this.salario;
        }
    };

    return empleado;
}

let empleado = nuevoEmpleado("Pepe",700);

//Devuelve 'Nombre:Pepe, Salario:700'
console.log(empleado.toString());   

//Devuelve 700
console.log(empleado.salario);