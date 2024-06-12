function newEmployee(name, salary) {

    let employee = {
        name: name,
        salary: salary,
        toString: function () {
            return "N:" + this.name + " S:" + this.salary;
        }
    };

    return employee;
}

let employee = newEmployee("Pepe",700);

//Returns 'N:Pepe, S:700'
console.log(employee.toString());   

//Returns 700
console.log(employee.salary);