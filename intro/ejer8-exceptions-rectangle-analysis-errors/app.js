class ShapeNotImplementedError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ShapeNotImplementedError';
        //Error.captureStackTrace(this);
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

class Shape {

    constructor(color) {
        if (this.constructor == Shape) {
            throw new ShapeNotImplementedError('Shape is an abstract class and cannot be instantiated');
        }
        this.color = color;
    }

    area() {
        throw new ShapeNotImplementedError('Method area() not implemented');
    }

    perimeter() {
        throw new ShapeNotImplementedError('Method perimeter() not implemented');
    }

    ratioAreaPerimetro() {
        const area = this.area();
        const perimeter = this.perimeter();
        if (isNaN(area)) {
            throw new NotValidParameterError("Can't calculate area/perimeter ratio", "area", area);
        }
        if (isNaN(perimeter) || perimeter == 0) {
            throw new NotValidParameterError("Can't calculate area/perimeter ratio", "perimeter", perimeter);
        }
        return area / perimeter;
    }

    toString() {
        return 'color: ' + this.color + ' area:' + this.area() + ' perimeter:' + this.perimeter();
    }
}

class Rectangle extends Shape {

    constructor(color, height, width) {
        super(color);
        this.height = height;
        this.width = width;
    }

    
    #checkParameters() {
        if (isNaN(this.height) || this.height <= 0) {
            throw new NotValidParameterError("Parameter error: not valid", "height", this.height);
        }
        if (isNaN(this.width) || this.width <= 0) {
            throw new NotValidParameterError("Parameter error: not valid", "width", this.width);
        }
    }

    area() {
        this.#checkParameters();
        return this.height * this.width;
    }

    perimeter() {
        this.#checkParameters();
        return this.height * 2 + this.width * 2;
    }

    toString() {
        return 'Rectangle: ' + super.toString();
    }
}

class Circle extends Shape {

    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }

    area() {
        this.#checkParameters();
        return Math.PI * this.radius * this.radius;
    }

    perimeter() {
        this.#checkParameters();
        return 2 * Math.PI * this.radius;
    }

    #checkParameters() {
        if (isNaN(this.radius) || this.radius <= 0) {
            throw new NotValidParameterError("Parameter error: not valid", "radius", this.radius);
        }
    }

    toString() {
        return 'Circle: ' + super.toString();
    }
}

class ShapeAnalyzer {

    constructor(shapes) {
        if (!Array.isArray(shapes) || shapes.length == 0) {
            throw new NotValidParameterError("Parameter error: empty array", "shapes", shapes);
        }
        this.shapes = shapes;
    }

    sumAreas() {

        let areaSum = 0;

        for (let i = 0; i < this.shapes.length; i++) {
            let rect = this.shapes[i];
            areaSum += rect.area();
        }

        return areaSum;
    }

    sumPerimeters() {

        let perimeterSum = 0;

        for (let i = 0; i < this.shapes.length; i++) {
            let rect = this.shapes[i];
            perimeterSum += rect.perimeter();
        }

        return perimeterSum;
    }

    avgArea() {
        return this.sumAreas() / this.shapes.length;
    }

    avgPerimeter() {
        return this.sumPerimeters() / this.shapes.length;
    }

    avgAreaPerimeterRatio() {
        return this.avgArea() / this.avgPerimeter();
    }
}

//------------------------------------

let rects = [
    new Rectangle('verde', 5, 6),
    new Circle('rojo', 2),
    new Rectangle('amarillo', 5, 5),
    new Circle('negro', 10)
];

let af = new ShapeAnalyzer(rects);

console.log('Average perimeter: ', af.avgPerimeter());
console.log('Average area: ', af.avgArea());
console.log('Average area/perimeter ratio: ', af.avgAreaPerimeterRatio());

//------------------------------------

try {
    new Shape('green');
} catch (e) {
    console.error(e);
}

try {
    let circ = new Circle('grey', -7);
    let area = circ.area();
} catch (e) {
    console.error(e.toString());
}

try {
    let rect = new Rectangle('purple', 'error', 9);
    let perim = rect.perimeter();
} catch (e) {
    console.error(e.toString());
}

try {
    let errorAF = new ShapeAnalyzer(null);    
} catch (e) {
    console.error(e.toString())
}
