class GestorViajes {

    viajesPorOrigen = new Map();
    viajesPorDestino = new Map();
    ciudades = new Set();
    viajes = [];

    addViaje(viaje) {

        this.viajes.push(viaje);

        this.ciudades.add(viaje.origen);
        this.ciudades.add(viaje.destino);

        this.#addViajePorCiudad(this.viajesPorDestino, viaje, viaje.destino);
        this.#addViajePorCiudad(this.viajesPorOrigen, viaje, viaje.origen);
    }

    #addViajePorCiudad(map, viaje, ciudad) {
        let v = map.get(ciudad);
        if (!v) {
            map.set(ciudad, [viaje]);
        } else {
            v.push(viaje);
        }
    }

    getViajesCiudadOrigen(ciudad) {
        return this.viajesPorOrigen.get(ciudad);
    }

    getViajesCiudadDestino(ciudad) {
        return this.viajesPorDestino.get(ciudad);
    }

    getViajes() {
        return this.viajes;
    }

    getCiudades() {
        return Array.from(this.ciudades);
    }
}

let gestor = new GestorViajes();

gestor.addViaje({ origen: 'Madrid', destino: 'Sevilla', duracion: 2 });
gestor.addViaje({ origen: 'Madrid', destino: 'Barcelona', duracion: 3 });
gestor.addViaje({ origen: 'Londres', destino: 'Barcelona', duracion: 3 });
gestor.addViaje({ origen: 'Barcelona', destino: 'Londres', duracion: 3 });
gestor.addViaje({ origen: 'Nueva York', destino: 'Moscú', duracion: 20 });

console.log(gestor.getViajesCiudadOrigen('Madrid'));
console.log(gestor.getViajesCiudadDestino('Barcelona'));
console.log(gestor.getCiudades());