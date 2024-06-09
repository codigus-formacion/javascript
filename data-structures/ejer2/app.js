class GestorAeropuertos {

    aeropuertos = new Map();

    addAeropuerto(aeropuerto){
        this.aeropuertos.set(aeropuerto.name, aeropuerto);
    }

    getAeropuerto(name){
        return this.aeropuertos.get(name);
    }
}

let aeropuertos = new GestorAeropuertos();

aeropuertos.addAeropuerto({ name: "Barajas", ciudad: "Madrid" });
aeropuertos.addAeropuerto({ name: "El Prat", ciudad: "Barcelona" })
aeropuertos.addAeropuerto({ name: "Manises", ciudad: "Valencia" });

console.log(aeropuertos.getAeropuerto('Manises'));
console.log(aeropuertos.getAeropuerto('Barajas'));