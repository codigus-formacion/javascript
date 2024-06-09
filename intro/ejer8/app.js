class FiguraNotImplementedError extends Error {
    constructor(message) {
        super(message);
        this.name = 'FiguraNotImplementedError';
        Error.captureStackTrace(this);
    }
}

class NotValidParameterError extends Error {
    constructor(message, parameterName, parameterValue) {
        super(message);
        this.name = 'NotValidParameterError';
        this.parameterName = parameterName;
        this.parameterValue = parameterValue;
    }

    toString() {
        return `${this.name}: ${this.message} - Parameter: ${this.parameterName} - Value: ${this.parameterValue}`;
    }
}

class Figura {

    constructor(color) {
        if (this.constructor == Figura) {
            throw new FiguraNotImplementedError('Figura is an abstract class and cannot be instantiated');
        }
        this.color = color;
    }

    area() {
        throw new FiguraNotImplementedError('Method area() not implemented');
    }

    perimetro() {
        throw new FiguraNotImplementedError('Method perimetro() not implemented');
    }

    ratioAreaPerimetro() {
        const area = this.area();
        const perimetro = this.perimetro();
        if (isNaN(area)) {
            throw new NotValidParameterError("No se puede calcular el ratio área/perímetro", "area", area);
        }
        if (isNaN(perimetro) || perimetro == 0) {
            throw new NotValidParameterError("No se puede calcular el ratio área/perímetro", "perimetro", perimetro);
        }
        return area / perimetro;
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

    
    #comprobarParametros() {
        if (isNaN(this.alto) || this.alto <= 0) {
            throw new NotValidParameterError("No se puede calcular el área del rectángulo", "alto", this.alto);
        }
        if (isNaN(this.ancho) || this.ancho <= 0) {
            throw new NotValidParameterError("No se puede calcular el área del rectángulo", "ancho", this.ancho);
        }
    }

    area() {
        this.#comprobarParametros();
        return this.alto * this.ancho;
    }

    perimetro() {
        this.#comprobarParametros();
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
        this.#comprobarParametros();
        return Math.PI * this.radio * this.radio;
    }

    perimetro() {
        this.#comprobarParametros();
        return 2 * Math.PI * this.radio;
    }

    #comprobarParametros() {
        if (isNaN(this.radio) || this.radio <= 0) {
            throw new NotValidParameterError("No se puede calcular el área del círculo", "radio", this.radio);
        }
    }

    toString() {
        return 'Círculo: ' + super.toString();
    }
}

class AnalizadorFiguras {

    constructor(figuras) {
        if (!Array.isArray(figuras) || figuras.length == 0) {
            throw new NotValidParameterError("El parámetro figuras debe ser un array al menos 1 elemento", "figuras", figuras);
        }
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

//------------------------------------

try {
    new Figura('verde');
} catch (e) {
    console.error(e);
}

try {
    let circ = new Circulo('gris', -7);
    let area = circ.area();
} catch (e) {
    console.error(e.toString());
}

try {
    let rect = new Rectangulo('lila', 'error', 9);
    let perim = rect.perimetro();
} catch (e) {
    console.error(e.toString());
}

try {
    let errorAF = new AnalizadorFiguras(null);    
} catch (e) {
    console.error(e.toString())
}
