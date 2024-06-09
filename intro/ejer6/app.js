class Rectangulo {

    constructor(color, alto, ancho) {
        this.color = color;
        this.alto = alto;
        this.ancho = ancho;
    }

    area() {
        return this.alto * this.ancho
    }

    perimetro() {
        return this.alto * 2 + this.ancho * 2
    }

    toString() {
        return 'area:' + this.area() + ' perimetro:' + this.perimetro();
    }
}

class AnalizadorFiguras {

    constructor(figuras) {
        this.figuras = figuras;
    }

    sumaAreas() {

        let sumaAreas = 0;

        for (let i = 0; i < this.figuras.length; i++) {
            let rect = this.figuras[i];
            sumaAreas += rect.area();
        }

        return sumaAreas;
    }

    sumaPerimetros() {

        let sumaPerimetros = 0;

        for (let i = 0; i < this.figuras.length; i++) {
            let rect = this.figuras[i];
            sumaPerimetros += rect.perimetro();
        }

        return sumaPerimetros;
    }

    areaMedia() {
        return this.sumaAreas() / this.figuras.length;
    }

    perimetroMedio() {
        return this.sumaPerimetros() / this.figuras.length;
    }
}

//------------------------------------

let rects = [
    new Rectangulo('verde', 5, 6),
    new Rectangulo('rojo', 2, 3),
    new Rectangulo('amarillo', 5, 5),
    new Rectangulo('negro', 10, 5)
];

let af = new AnalizadorFiguras(rects);

console.log('Perimetro medio: ', af.perimetroMedio());
console.log('Area media: ', af.areaMedia());
