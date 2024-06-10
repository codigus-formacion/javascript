let employee = {
    name: 'Pepe',
    salary: 700,
    toString: function () {
        return 'N:' + this.name + ' S:' + this.salary;
    }
}

//Shows N:Pepe S:700
console.log(employee.toString());

employee.getCategory = function () {
    return this.salary > 800 ? 'Superior' : 'Normal';
}

console.log('C:' + employee.getCategory());