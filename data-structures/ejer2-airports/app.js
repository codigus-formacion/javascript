class AirportManager {

    airports = new Map();

    addAirport(airport){
        this.airports.set(airport.name, airport);
    }

    getAirport(name){
        return this.airports.get(name);
    }
}

let airports = new AirportManager();

airports.addAirport({ name: "Barajas", city: "Madrid" });
airports.addAirport({ name: "El Prat", city: "Barcelona" })
airports.addAirport({ name: "Manises", city: "Valencia" });

console.log(airports.getAirport('Manises'));
console.log(airports.getAirport('Barajas'));