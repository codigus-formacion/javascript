class TripManager {

    tripsByOrigin = new Map();
    tripsByDestination = new Map();
    cities = new Set();
    trips = [];

    addTrip(trip) {

        this.trips.push(trip);

        this.cities.add(trip.origin);
        this.cities.add(trip.destination);

        this.#addTripByCity(this.tripsByDestination, trip, trip.destination);
        this.#addTripByCity(this.tripsByOrigin, trip, trip.origin);
    }

    #addTripByCity(map, trip, city) {
        let v = map.get(city);
        if (!v) {
            map.set(city, [trip]);
        } else {
            v.push(trip);
        }
    }

    getTripsByOrigin(city) {
        return this.tripsByOrigin.get(city);
    }

    getTripsByDestination(city) {
        return this.tripsByDestination.get(city);
    }

    getTrips() {
        return this.trips;
    }

    getCities() {
        return Array.from(this.cities);
    }
}

let gestor = new GestorViajes();

gestor.addTrip({ origin: 'Madrid', destination: 'Sevilla', duration: 2 });
gestor.addTrip({ origin: 'Madrid', destination: 'Barcelona', duration: 3 });
gestor.addTrip({ origin: 'Londres', destination: 'Barcelona', duration: 3 });
gestor.addTrip({ origin: 'Barcelona', destination: 'Londres', duration: 3 });
gestor.addTrip({ origin: 'New York', destination: 'Moscow', duration: 20 });

console.log(gestor.getTripsByOrigin('Madrid'));
console.log(gestor.getTripsByDestination('Barcelona'));
console.log(gestor.getCities());