class Figura {

    constructor(color) {
        if (this.constructor == Figura) {
            console.error("No se puede instanciar la clase abstracta Figura")
            return;
        }
        this.color = color;
    }

    area() {
        console.error('Método perímetro no implementado');
    }

    perimetro() {
        console.error('Método perímetro no implementado');
    }

    ratioAreaPerimetro() {
        return this.area() / this.perimetro();
    }

    toString() {
        return 'color: ' + this.color + ' area:' + this.area() + ' perimetro:' + this.perimetro();
    }
}

class Rectangulo extends Figura {

    constructor(color, alto, ancho) {
        super(color);
        this.alto = alto;
        this.ancho = ancho;
    }

    area() {
        return this.alto * this.ancho;
    }

    perimetro() {
        return this.alto * 2 + this.ancho * 2;
    }

    toString() {
        return 'Rectángulo: ' + super.toString();
    }
}

class Circulo extends Figura {

    constructor(color, radio) {
        super(color);
        this.radio = radio;
    }

    area() {
        return Math.PI * this.radio * this.radio;
    }

    perimetro() {
        return 2 * Math.PI * this.radio;
    }

    toString() {
        return 'Círculo: ' + super.toString();
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

    ratioAreaPerimetroMedio() {
        return this.areaMedia() / this.perimetroMedio();
    }
}

//------------------------------------

let rects = [
    new Rectangulo('verde', 5, 6),
    new Circulo('rojo', 2),
    new Rectangulo('amarillo', 5, 5),
    new Circulo('negro', 10)
];

let af = new AnalizadorFiguras(rects);

console.log('Perimetro medio: ', af.perimetroMedio());
console.log('Area media: ', af.areaMedia());
console.log('Ratio Area/Perimetro medio: ', af.ratioAreaPerimetroMedio());
